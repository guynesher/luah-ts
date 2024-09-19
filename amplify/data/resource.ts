import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { todoAccess } from '../functions/todo-access/resource';

const schema = a.schema({
    Todo: a
      .model({
        content: a.string(),
      })
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]),
    User: a
      .model({
        userId: a.id().required(),
        name: a.string(),
        surname: a.string(),
        phone: a.phone(),
        email: a.email(), //Same as Cognito entrance email
        cognitoUserName: a.string(), //Cognito ID ref
        picture: a.string(), //If we add picture to profile
        isAdmin: a.boolean(), 
        sessionStart: a.timestamp(), //checks if the user run in multiple computer simultaniously 
        computerIP: a.string(), //checks if the user run in multiple computer simultaniously
        adress: a.hasOne('Adress','userId'),
        cards: a.string().array(), //CardId of the card the user bought
        recommendations: a.hasMany('Recommendation','userId'),
        contacts: a.hasMany('Contact','userId'),
        userPrograms: a.string().array(), //programId of all programs the user can be registered to 
        orders: a.hasMany('Order','userId'), 
        userDatas: a.hasMany('UserData','userId') //the datas that the user create during his work for AI work
      })
      .identifier(["userId"])
      .secondaryIndexes((index) => [
        index("email")
          .queryField("getUserByEmail"),
      ])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]),
    Adress: a
      .model({
        userId: a.id().required(),
        user: a.belongsTo('User', 'userId'),
        street: a.string(),
        house: a.string(),
        appartment: a.string(),
        city: a.string(),
        zipcode: a.string()
      })
      .identifier(["userId"])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]),
    Recommendation: a
      .model({
        recommendationId: a.id().required(),
        user: a.belongsTo('User', 'userId'),
        name: a.string(),
        text: a.string(),
        rating: a.integer(),
        createdAt: a.timestamp(), //We show recommandation by the order from new to old
        userId: a.id()
      })    
      .secondaryIndexes((index) => [
        index("userId")
          .queryField("listRecommendationByUserId"),
      ])
      .identifier(["recommendationId"])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]),
    Contact: a
      .model({
        contactId: a.id().required(),
        user: a.belongsTo('User', 'userId'),
        name: a.string(),
        email: a.email(),
        phone: a.phone(),
        text: a.string(),
        isAnswered: a.boolean(),
        createdAt: a.timestamp(),
        userId: a.id()
      })    
      .secondaryIndexes((index) => [
        index("userId")
          .queryField("listContactByUserId"),
        index("email")
          .queryField("listContactByEmail"),
      ])
      .identifier(["contactId"])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]),
    UserProgram: a
      .model({
        userProgramId: a.id().required(),
        programName: a.string(),
        email: a.email(), //this is the connection to user. We get the mail and programName from Morning and than
                          //we find the userProgramByEmailAndProgramName and update isOpen=true, expiredAt=now, 
                          //currentStatus=nextQuestion = first question of the program.
        isOpen: a.boolean(),
        expiredAt: a.timestamp(),
        treasure: a.integer(),
        currentStatus: a.json(), //Maximal level the user reached - includes {level, chapter, bundle, question, premutation}
        nextQuestion: a.json(), //Next question the user was suggested based on his progress 
      })
      .secondaryIndexes((index) => [
        index("email")
          .queryField("userProgramByEmailAndProgramName")
          .sortKeys(["programName"]),
        index("email")
          .queryField("userProgramByEmail"),
      ])
      .identifier(["userProgramId"])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]),
    Order: a
      .model({
        orderId: a.id().required(),
        user: a.belongsTo('User', 'userId'),
        userId: a.id(),
        billingDetails: a.json(), //Update the billing details from Morning
        totalPrice: a.float(),
        totalGoldCoins: a.integer(),
        refNumber: a.string(), //Update the refNumber  from Morning
        isPaid: a.boolean(),
        isDelivered: a.boolean(),
        //orderDetails: a.hasOne('OrderDetails','orderId'),
      })    
      .secondaryIndexes((index) => [
        index("userId")
          .queryField("listOrdersByUserId"),
        index("refNumber")
          .queryField("listOrdersByUserRefNumber"),
      ])
      .identifier(["orderId"])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]),
    // OrderDetails: a
    //   .model({
    //     orderDetailsId: a.id().required(),
    //     order: a.belongsTo('Order', 'orderId'),
    //     orderId: a.id(),
    //     product: a.belongsTo('Product', 'productId'),
    //     price: a.float(),
    //     goldCoins: a.integer()
    //   })
    //   .secondaryIndexes((index) => [
    //     index("orderId")
    //       .queryField("listOrderDetailsIdByOrderId"),
    //   ])
    //   .identifier(["orderDetailsId"]),
    // Product: a
    //   .model({
    //     productId: a.id().required(),
    //     orderDetails: a.belongsTo('OrderDetails', 'productId'),
    //     productName: a.string(),
    //     productType: a.string(),
    //     description: a.string(),
    //     price: a.float(),
    //     goldCoins: a.integer(),
    //     productPicture: a.string(),
    //     stock: a.integer()
    //   })
    //   .identifier(["productId"])
    //   .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
    //     allow.groups(['Users','Admins']).to(['create','delete','read','update'])
    //   ]),
    Program: a
      .model({
        programId: a.id().required(),
        programNumber: a.integer(),
        programName: a.string(),
        programSubject: a.string(),
        programDescription: a.string(),
        programAnimationName: a.string(),
        programAnimation: a.json(), //Optional: We can store the actual animation in the DB 
        levels: a.hasMany("Level","programName")
      })
      .identifier(["programId"])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]), 
    Level: a
      .model({
        levelId: a.id().required(),
        program: a.belongsTo("Program","programName"),
        programName: a.string(),
        levelNumber: a.integer(),
        levelName: a.string(),
        levelSubject: a.string(),
        levelDescription: a.string(),
        levelAnimationName: a.string(),
        levelAnimation: a.json(), //Optional: We can store the actual animation in the DB 
        chapters: a.hasMany("Chapter","levelId")
      })
      .identifier(["levelId"])
      .secondaryIndexes((index) => [
        index("programName")
          .queryField("listLevelsByProgramName"),
      ])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]), 
    Chapter: a
      .model({
        chapterId: a.id().required(),
        level: a.belongsTo("Level","levelId"),
        levelId: a.id(),
        levelNumber: a.integer(),
        chapterNumber: a.integer(),
        bundleNumber: a.integer().array(), //We can have several sub-chapters
        chapterName: a.string(),
        chapterSubject: a.string(),
        chapterDescription: a.string(),
        chapterAnimationName: a.string(),
        chapterAnimation: a.json(), //Optional: We can store the actual animation in the DB 
        conditionsList: a.json(), //We can define several conditioning paths - will be difined by the teacher
        questions: a.hasMany("Question","chapterId")
      })
      .identifier(["chapterId"])
      .secondaryIndexes((index) => [
        index("levelNumber")
          .queryField("listChaptersByLevelNumber"),
      ])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]),    
    Question: a
      .model({
        questionId: a.id().required(),
        chapter: a.belongsTo("Chapter","chapterId"),
        chapterId: a.id(),
        chapterNumber: a.integer(),
        questionNumber: a.integer(),
        questionName: a.string(),
        questionSubject: a.string(),
        questionDescription: a.string(),
        questionAnimationName: a.string(),
        questionAnimation: a.json(),
        permutationList: a.json(), //We can produce several permuations from each question by changing the items positions 
        items: a.hasMany("Item","questionId"),
        userDatas: a.hasMany("UserData","questionId")
      })
      .identifier(["questionId"])
      .secondaryIndexes((index) => [
        index("chapterNumber")
          .queryField("listQuestionsByChapterNumber"),
      ])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]),    
    Item: a
      .model({
        itemId: a.id().required(),
        question: a.belongsTo("Question","questionId"),
        questionId: a.id().required(),
        questionNumber: a.integer(),
        itemNumber: a.integer(),
        itemType: a.string(),
        itemPosition: a.string().array(), //[x,y]
        itemSize: a.string().array(), //[width,height]
        itemCondition: a.string().array(), //[condition,continueTo]
        step: a.integer(),
        loop: a.boolean(),
        autoplay: a.boolean(),
        animationName: a.string(),
        animation: a.json(),
        isAudioPlay: a.boolean(),
        isAudioHoover: a.boolean(),
        isAudioClick: a.boolean(),
        audioData: a.string(),
        segments: a.integer().array(),//[[start,end],[start,end],[start,end]]
      })
      .identifier(["itemId"])
      .secondaryIndexes((index) => [
        index("questionNumber")
          .queryField("listItemsByQuestionNumber"),
      ])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]), 
    ReportData: a //used as a mediator to have a many to many relationship between Report and UserData
      .model({     
        reportId: a.id().required(),
        userDataId: a.id().required(),
        report: a.belongsTo('Report', 'reportId'),
        userData: a.belongsTo('UserData', 'userDataId'),
      })
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]),      
    Report: a
      .model({
        reportId: a.id().required(),
        reportType: a.string(), // can be one of the following: program/chapter/level/user/question (can be an ENUM)
        reportRef: a.string(), //Id of the program/chapter/level/user/question
        reportData: a.json(), //The actual report details
        userDatas: a.hasMany('ReportData', 'reportId'), //What are the userDatas that were used to build the report
      })
      .identifier(["reportId"])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]),      
    UserData: a
      .model({
        userDataId: a.id().required(),
        user: a.belongsTo('User', 'userId'),
        userId: a.id(),
        question: a.belongsTo("Question","questionId"),
        questionId: a.id(),
        chapterId: a.id(),
        levelId: a.id(),
        programId: a.id(),
        currentPermutation: a.json(),
        answer: a.json(),
        precent: a.float(),
        userStatus: a.json(), //currentStatus of user - the maximal level the user has reached
        nextQuestion: a.json(), //Next question the user was suggested based on his progress 
        createdAt: a.timestamp(), //We can use the last data as ref
        reports: a.hasMany('ReportData', 'userDataId'), //To which reports the data is contributing 
      })
      .identifier(["userDataId"])
      .secondaryIndexes((index) => [
        index("userId").queryField("listDatasByUser"),
        index("questionId").queryField("listDatasByQuestion"),
        index("questionId").queryField("listDatasByQuestionAndUser").sortKeys(["userId"]),
        index("chapterId").queryField("listDatasByChapter"),
        index("chapterId").queryField("listDatasByChapterAndUser").sortKeys(["userId"]),
        index("levelId").queryField("listDatasByLevel"),
        index("levelId").queryField("listDatasByLevelAndUser").sortKeys(["userId"]),
        index("programId").queryField("listDatasByProgram"),
        index("programId").queryField("listDatasByProgramAndUser").sortKeys(["userId"]),
      ])
      .authorization((allow) => [allow.publicApiKey().to(['create','read','update']),
        allow.groups(['Users','Admins']).to(['create','delete','read','update'])
      ]),
}).authorization(allow => [allow.resource(todoAccess)]);;

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>

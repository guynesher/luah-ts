/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAdress = /* GraphQL */ `mutation CreateAdress(
  $condition: ModelAdressConditionInput
  $input: CreateAdressInput!
) {
  createAdress(condition: $condition, input: $input) {
    appartment
    city
    createdAt
    house
    street
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userId
    zipcode
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAdressMutationVariables,
  APITypes.CreateAdressMutation
>;
export const createChapter = /* GraphQL */ `mutation CreateChapter(
  $condition: ModelChapterConditionInput
  $input: CreateChapterInput!
) {
  createChapter(condition: $condition, input: $input) {
    bundleNumber
    chapterAnimation
    chapterAnimationName
    chapterDescription
    chapterId
    chapterName
    chapterNumber
    chapterSubject
    conditionsList
    createdAt
    level {
      createdAt
      levelAnimation
      levelAnimationName
      levelDescription
      levelId
      levelName
      levelNumber
      levelSubject
      programName
      updatedAt
      __typename
    }
    levelId
    levelNumber
    questions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChapterMutationVariables,
  APITypes.CreateChapterMutation
>;
export const createContact = /* GraphQL */ `mutation CreateContact(
  $condition: ModelContactConditionInput
  $input: CreateContactInput!
) {
  createContact(condition: $condition, input: $input) {
    contactId
    createdAt
    email
    isAnswered
    name
    phone
    text
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContactMutationVariables,
  APITypes.CreateContactMutation
>;
export const createItem = /* GraphQL */ `mutation CreateItem(
  $condition: ModelItemConditionInput
  $input: CreateItemInput!
) {
  createItem(condition: $condition, input: $input) {
    animation
    animationName
    audioData
    autoplay
    createdAt
    isAudioClick
    isAudioHoover
    isAudioPlay
    itemCondition
    itemId
    itemNumber
    itemPosition
    itemSize
    itemType
    loop
    question {
      chapterId
      chapterNumber
      createdAt
      permutationList
      questionAnimation
      questionAnimationName
      questionDescription
      questionId
      questionName
      questionNumber
      questionSubject
      updatedAt
      __typename
    }
    questionId
    questionNumber
    segments
    step
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateItemMutationVariables,
  APITypes.CreateItemMutation
>;
export const createLevel = /* GraphQL */ `mutation CreateLevel(
  $condition: ModelLevelConditionInput
  $input: CreateLevelInput!
) {
  createLevel(condition: $condition, input: $input) {
    chapters {
      nextToken
      __typename
    }
    createdAt
    levelAnimation
    levelAnimationName
    levelDescription
    levelId
    levelName
    levelNumber
    levelSubject
    program {
      createdAt
      programAnimation
      programAnimationName
      programDescription
      programId
      programName
      programNumber
      programSubject
      updatedAt
      __typename
    }
    programName
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLevelMutationVariables,
  APITypes.CreateLevelMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $condition: ModelOrderConditionInput
  $input: CreateOrderInput!
) {
  createOrder(condition: $condition, input: $input) {
    billingDetails
    createdAt
    isDelivered
    isPaid
    orderId
    refNumber
    totalGoldCoins
    totalPrice
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const createProgram = /* GraphQL */ `mutation CreateProgram(
  $condition: ModelProgramConditionInput
  $input: CreateProgramInput!
) {
  createProgram(condition: $condition, input: $input) {
    createdAt
    levels {
      nextToken
      __typename
    }
    programAnimation
    programAnimationName
    programDescription
    programId
    programName
    programNumber
    programSubject
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProgramMutationVariables,
  APITypes.CreateProgramMutation
>;
export const createQuestion = /* GraphQL */ `mutation CreateQuestion(
  $condition: ModelQuestionConditionInput
  $input: CreateQuestionInput!
) {
  createQuestion(condition: $condition, input: $input) {
    chapter {
      bundleNumber
      chapterAnimation
      chapterAnimationName
      chapterDescription
      chapterId
      chapterName
      chapterNumber
      chapterSubject
      conditionsList
      createdAt
      levelId
      levelNumber
      updatedAt
      __typename
    }
    chapterId
    chapterNumber
    createdAt
    items {
      nextToken
      __typename
    }
    permutationList
    questionAnimation
    questionAnimationName
    questionDescription
    questionId
    questionName
    questionNumber
    questionSubject
    updatedAt
    userDatas {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuestionMutationVariables,
  APITypes.CreateQuestionMutation
>;
export const createRecommendation = /* GraphQL */ `mutation CreateRecommendation(
  $condition: ModelRecommendationConditionInput
  $input: CreateRecommendationInput!
) {
  createRecommendation(condition: $condition, input: $input) {
    createdAt
    name
    rating
    recommendationId
    text
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRecommendationMutationVariables,
  APITypes.CreateRecommendationMutation
>;
export const createReport = /* GraphQL */ `mutation CreateReport(
  $condition: ModelReportConditionInput
  $input: CreateReportInput!
) {
  createReport(condition: $condition, input: $input) {
    createdAt
    reportData
    reportId
    reportRef
    reportType
    updatedAt
    userDatas {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReportMutationVariables,
  APITypes.CreateReportMutation
>;
export const createReportData = /* GraphQL */ `mutation CreateReportData(
  $condition: ModelReportDataConditionInput
  $input: CreateReportDataInput!
) {
  createReportData(condition: $condition, input: $input) {
    createdAt
    id
    report {
      createdAt
      reportData
      reportId
      reportRef
      reportType
      updatedAt
      __typename
    }
    reportId
    updatedAt
    userData {
      answer
      chapterId
      createdAt
      currentPermutation
      levelId
      nextQuestion
      precent
      programId
      questionId
      updatedAt
      userDataId
      userId
      userStatus
      __typename
    }
    userDataId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReportDataMutationVariables,
  APITypes.CreateReportDataMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
    adress {
      appartment
      city
      createdAt
      house
      street
      updatedAt
      userId
      zipcode
      __typename
    }
    cards
    cognitoUserName
    computerIP
    contacts {
      nextToken
      __typename
    }
    createdAt
    email
    isAdmin
    name
    orders {
      nextToken
      __typename
    }
    phone
    picture
    recommendations {
      nextToken
      __typename
    }
    sessionStart
    surname
    updatedAt
    userDatas {
      nextToken
      __typename
    }
    userId
    userPrograms
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const createUserData = /* GraphQL */ `mutation CreateUserData(
  $condition: ModelUserDataConditionInput
  $input: CreateUserDataInput!
) {
  createUserData(condition: $condition, input: $input) {
    answer
    chapterId
    createdAt
    currentPermutation
    levelId
    nextQuestion
    precent
    programId
    question {
      chapterId
      chapterNumber
      createdAt
      permutationList
      questionAnimation
      questionAnimationName
      questionDescription
      questionId
      questionName
      questionNumber
      questionSubject
      updatedAt
      __typename
    }
    questionId
    reports {
      nextToken
      __typename
    }
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userDataId
    userId
    userStatus
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserDataMutationVariables,
  APITypes.CreateUserDataMutation
>;
export const createUserProgram = /* GraphQL */ `mutation CreateUserProgram(
  $condition: ModelUserProgramConditionInput
  $input: CreateUserProgramInput!
) {
  createUserProgram(condition: $condition, input: $input) {
    createdAt
    currentStatus
    email
    expiredAt
    isOpen
    nextQuestion
    programName
    treasure
    updatedAt
    userProgramId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProgramMutationVariables,
  APITypes.CreateUserProgramMutation
>;
export const deleteAdress = /* GraphQL */ `mutation DeleteAdress(
  $condition: ModelAdressConditionInput
  $input: DeleteAdressInput!
) {
  deleteAdress(condition: $condition, input: $input) {
    appartment
    city
    createdAt
    house
    street
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userId
    zipcode
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAdressMutationVariables,
  APITypes.DeleteAdressMutation
>;
export const deleteChapter = /* GraphQL */ `mutation DeleteChapter(
  $condition: ModelChapterConditionInput
  $input: DeleteChapterInput!
) {
  deleteChapter(condition: $condition, input: $input) {
    bundleNumber
    chapterAnimation
    chapterAnimationName
    chapterDescription
    chapterId
    chapterName
    chapterNumber
    chapterSubject
    conditionsList
    createdAt
    level {
      createdAt
      levelAnimation
      levelAnimationName
      levelDescription
      levelId
      levelName
      levelNumber
      levelSubject
      programName
      updatedAt
      __typename
    }
    levelId
    levelNumber
    questions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChapterMutationVariables,
  APITypes.DeleteChapterMutation
>;
export const deleteContact = /* GraphQL */ `mutation DeleteContact(
  $condition: ModelContactConditionInput
  $input: DeleteContactInput!
) {
  deleteContact(condition: $condition, input: $input) {
    contactId
    createdAt
    email
    isAnswered
    name
    phone
    text
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContactMutationVariables,
  APITypes.DeleteContactMutation
>;
export const deleteItem = /* GraphQL */ `mutation DeleteItem(
  $condition: ModelItemConditionInput
  $input: DeleteItemInput!
) {
  deleteItem(condition: $condition, input: $input) {
    animation
    animationName
    audioData
    autoplay
    createdAt
    isAudioClick
    isAudioHoover
    isAudioPlay
    itemCondition
    itemId
    itemNumber
    itemPosition
    itemSize
    itemType
    loop
    question {
      chapterId
      chapterNumber
      createdAt
      permutationList
      questionAnimation
      questionAnimationName
      questionDescription
      questionId
      questionName
      questionNumber
      questionSubject
      updatedAt
      __typename
    }
    questionId
    questionNumber
    segments
    step
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteItemMutationVariables,
  APITypes.DeleteItemMutation
>;
export const deleteLevel = /* GraphQL */ `mutation DeleteLevel(
  $condition: ModelLevelConditionInput
  $input: DeleteLevelInput!
) {
  deleteLevel(condition: $condition, input: $input) {
    chapters {
      nextToken
      __typename
    }
    createdAt
    levelAnimation
    levelAnimationName
    levelDescription
    levelId
    levelName
    levelNumber
    levelSubject
    program {
      createdAt
      programAnimation
      programAnimationName
      programDescription
      programId
      programName
      programNumber
      programSubject
      updatedAt
      __typename
    }
    programName
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLevelMutationVariables,
  APITypes.DeleteLevelMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $condition: ModelOrderConditionInput
  $input: DeleteOrderInput!
) {
  deleteOrder(condition: $condition, input: $input) {
    billingDetails
    createdAt
    isDelivered
    isPaid
    orderId
    refNumber
    totalGoldCoins
    totalPrice
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const deleteProgram = /* GraphQL */ `mutation DeleteProgram(
  $condition: ModelProgramConditionInput
  $input: DeleteProgramInput!
) {
  deleteProgram(condition: $condition, input: $input) {
    createdAt
    levels {
      nextToken
      __typename
    }
    programAnimation
    programAnimationName
    programDescription
    programId
    programName
    programNumber
    programSubject
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProgramMutationVariables,
  APITypes.DeleteProgramMutation
>;
export const deleteQuestion = /* GraphQL */ `mutation DeleteQuestion(
  $condition: ModelQuestionConditionInput
  $input: DeleteQuestionInput!
) {
  deleteQuestion(condition: $condition, input: $input) {
    chapter {
      bundleNumber
      chapterAnimation
      chapterAnimationName
      chapterDescription
      chapterId
      chapterName
      chapterNumber
      chapterSubject
      conditionsList
      createdAt
      levelId
      levelNumber
      updatedAt
      __typename
    }
    chapterId
    chapterNumber
    createdAt
    items {
      nextToken
      __typename
    }
    permutationList
    questionAnimation
    questionAnimationName
    questionDescription
    questionId
    questionName
    questionNumber
    questionSubject
    updatedAt
    userDatas {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuestionMutationVariables,
  APITypes.DeleteQuestionMutation
>;
export const deleteRecommendation = /* GraphQL */ `mutation DeleteRecommendation(
  $condition: ModelRecommendationConditionInput
  $input: DeleteRecommendationInput!
) {
  deleteRecommendation(condition: $condition, input: $input) {
    createdAt
    name
    rating
    recommendationId
    text
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRecommendationMutationVariables,
  APITypes.DeleteRecommendationMutation
>;
export const deleteReport = /* GraphQL */ `mutation DeleteReport(
  $condition: ModelReportConditionInput
  $input: DeleteReportInput!
) {
  deleteReport(condition: $condition, input: $input) {
    createdAt
    reportData
    reportId
    reportRef
    reportType
    updatedAt
    userDatas {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReportMutationVariables,
  APITypes.DeleteReportMutation
>;
export const deleteReportData = /* GraphQL */ `mutation DeleteReportData(
  $condition: ModelReportDataConditionInput
  $input: DeleteReportDataInput!
) {
  deleteReportData(condition: $condition, input: $input) {
    createdAt
    id
    report {
      createdAt
      reportData
      reportId
      reportRef
      reportType
      updatedAt
      __typename
    }
    reportId
    updatedAt
    userData {
      answer
      chapterId
      createdAt
      currentPermutation
      levelId
      nextQuestion
      precent
      programId
      questionId
      updatedAt
      userDataId
      userId
      userStatus
      __typename
    }
    userDataId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReportDataMutationVariables,
  APITypes.DeleteReportDataMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
    adress {
      appartment
      city
      createdAt
      house
      street
      updatedAt
      userId
      zipcode
      __typename
    }
    cards
    cognitoUserName
    computerIP
    contacts {
      nextToken
      __typename
    }
    createdAt
    email
    isAdmin
    name
    orders {
      nextToken
      __typename
    }
    phone
    picture
    recommendations {
      nextToken
      __typename
    }
    sessionStart
    surname
    updatedAt
    userDatas {
      nextToken
      __typename
    }
    userId
    userPrograms
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const deleteUserData = /* GraphQL */ `mutation DeleteUserData(
  $condition: ModelUserDataConditionInput
  $input: DeleteUserDataInput!
) {
  deleteUserData(condition: $condition, input: $input) {
    answer
    chapterId
    createdAt
    currentPermutation
    levelId
    nextQuestion
    precent
    programId
    question {
      chapterId
      chapterNumber
      createdAt
      permutationList
      questionAnimation
      questionAnimationName
      questionDescription
      questionId
      questionName
      questionNumber
      questionSubject
      updatedAt
      __typename
    }
    questionId
    reports {
      nextToken
      __typename
    }
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userDataId
    userId
    userStatus
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserDataMutationVariables,
  APITypes.DeleteUserDataMutation
>;
export const deleteUserProgram = /* GraphQL */ `mutation DeleteUserProgram(
  $condition: ModelUserProgramConditionInput
  $input: DeleteUserProgramInput!
) {
  deleteUserProgram(condition: $condition, input: $input) {
    createdAt
    currentStatus
    email
    expiredAt
    isOpen
    nextQuestion
    programName
    treasure
    updatedAt
    userProgramId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProgramMutationVariables,
  APITypes.DeleteUserProgramMutation
>;
export const updateAdress = /* GraphQL */ `mutation UpdateAdress(
  $condition: ModelAdressConditionInput
  $input: UpdateAdressInput!
) {
  updateAdress(condition: $condition, input: $input) {
    appartment
    city
    createdAt
    house
    street
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userId
    zipcode
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAdressMutationVariables,
  APITypes.UpdateAdressMutation
>;
export const updateChapter = /* GraphQL */ `mutation UpdateChapter(
  $condition: ModelChapterConditionInput
  $input: UpdateChapterInput!
) {
  updateChapter(condition: $condition, input: $input) {
    bundleNumber
    chapterAnimation
    chapterAnimationName
    chapterDescription
    chapterId
    chapterName
    chapterNumber
    chapterSubject
    conditionsList
    createdAt
    level {
      createdAt
      levelAnimation
      levelAnimationName
      levelDescription
      levelId
      levelName
      levelNumber
      levelSubject
      programName
      updatedAt
      __typename
    }
    levelId
    levelNumber
    questions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChapterMutationVariables,
  APITypes.UpdateChapterMutation
>;
export const updateContact = /* GraphQL */ `mutation UpdateContact(
  $condition: ModelContactConditionInput
  $input: UpdateContactInput!
) {
  updateContact(condition: $condition, input: $input) {
    contactId
    createdAt
    email
    isAnswered
    name
    phone
    text
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContactMutationVariables,
  APITypes.UpdateContactMutation
>;
export const updateItem = /* GraphQL */ `mutation UpdateItem(
  $condition: ModelItemConditionInput
  $input: UpdateItemInput!
) {
  updateItem(condition: $condition, input: $input) {
    animation
    animationName
    audioData
    autoplay
    createdAt
    isAudioClick
    isAudioHoover
    isAudioPlay
    itemCondition
    itemId
    itemNumber
    itemPosition
    itemSize
    itemType
    loop
    question {
      chapterId
      chapterNumber
      createdAt
      permutationList
      questionAnimation
      questionAnimationName
      questionDescription
      questionId
      questionName
      questionNumber
      questionSubject
      updatedAt
      __typename
    }
    questionId
    questionNumber
    segments
    step
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateItemMutationVariables,
  APITypes.UpdateItemMutation
>;
export const updateLevel = /* GraphQL */ `mutation UpdateLevel(
  $condition: ModelLevelConditionInput
  $input: UpdateLevelInput!
) {
  updateLevel(condition: $condition, input: $input) {
    chapters {
      nextToken
      __typename
    }
    createdAt
    levelAnimation
    levelAnimationName
    levelDescription
    levelId
    levelName
    levelNumber
    levelSubject
    program {
      createdAt
      programAnimation
      programAnimationName
      programDescription
      programId
      programName
      programNumber
      programSubject
      updatedAt
      __typename
    }
    programName
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLevelMutationVariables,
  APITypes.UpdateLevelMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $condition: ModelOrderConditionInput
  $input: UpdateOrderInput!
) {
  updateOrder(condition: $condition, input: $input) {
    billingDetails
    createdAt
    isDelivered
    isPaid
    orderId
    refNumber
    totalGoldCoins
    totalPrice
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const updateProgram = /* GraphQL */ `mutation UpdateProgram(
  $condition: ModelProgramConditionInput
  $input: UpdateProgramInput!
) {
  updateProgram(condition: $condition, input: $input) {
    createdAt
    levels {
      nextToken
      __typename
    }
    programAnimation
    programAnimationName
    programDescription
    programId
    programName
    programNumber
    programSubject
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProgramMutationVariables,
  APITypes.UpdateProgramMutation
>;
export const updateQuestion = /* GraphQL */ `mutation UpdateQuestion(
  $condition: ModelQuestionConditionInput
  $input: UpdateQuestionInput!
) {
  updateQuestion(condition: $condition, input: $input) {
    chapter {
      bundleNumber
      chapterAnimation
      chapterAnimationName
      chapterDescription
      chapterId
      chapterName
      chapterNumber
      chapterSubject
      conditionsList
      createdAt
      levelId
      levelNumber
      updatedAt
      __typename
    }
    chapterId
    chapterNumber
    createdAt
    items {
      nextToken
      __typename
    }
    permutationList
    questionAnimation
    questionAnimationName
    questionDescription
    questionId
    questionName
    questionNumber
    questionSubject
    updatedAt
    userDatas {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuestionMutationVariables,
  APITypes.UpdateQuestionMutation
>;
export const updateRecommendation = /* GraphQL */ `mutation UpdateRecommendation(
  $condition: ModelRecommendationConditionInput
  $input: UpdateRecommendationInput!
) {
  updateRecommendation(condition: $condition, input: $input) {
    createdAt
    name
    rating
    recommendationId
    text
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRecommendationMutationVariables,
  APITypes.UpdateRecommendationMutation
>;
export const updateReport = /* GraphQL */ `mutation UpdateReport(
  $condition: ModelReportConditionInput
  $input: UpdateReportInput!
) {
  updateReport(condition: $condition, input: $input) {
    createdAt
    reportData
    reportId
    reportRef
    reportType
    updatedAt
    userDatas {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReportMutationVariables,
  APITypes.UpdateReportMutation
>;
export const updateReportData = /* GraphQL */ `mutation UpdateReportData(
  $condition: ModelReportDataConditionInput
  $input: UpdateReportDataInput!
) {
  updateReportData(condition: $condition, input: $input) {
    createdAt
    id
    report {
      createdAt
      reportData
      reportId
      reportRef
      reportType
      updatedAt
      __typename
    }
    reportId
    updatedAt
    userData {
      answer
      chapterId
      createdAt
      currentPermutation
      levelId
      nextQuestion
      precent
      programId
      questionId
      updatedAt
      userDataId
      userId
      userStatus
      __typename
    }
    userDataId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReportDataMutationVariables,
  APITypes.UpdateReportDataMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
    adress {
      appartment
      city
      createdAt
      house
      street
      updatedAt
      userId
      zipcode
      __typename
    }
    cards
    cognitoUserName
    computerIP
    contacts {
      nextToken
      __typename
    }
    createdAt
    email
    isAdmin
    name
    orders {
      nextToken
      __typename
    }
    phone
    picture
    recommendations {
      nextToken
      __typename
    }
    sessionStart
    surname
    updatedAt
    userDatas {
      nextToken
      __typename
    }
    userId
    userPrograms
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const updateUserData = /* GraphQL */ `mutation UpdateUserData(
  $condition: ModelUserDataConditionInput
  $input: UpdateUserDataInput!
) {
  updateUserData(condition: $condition, input: $input) {
    answer
    chapterId
    createdAt
    currentPermutation
    levelId
    nextQuestion
    precent
    programId
    question {
      chapterId
      chapterNumber
      createdAt
      permutationList
      questionAnimation
      questionAnimationName
      questionDescription
      questionId
      questionName
      questionNumber
      questionSubject
      updatedAt
      __typename
    }
    questionId
    reports {
      nextToken
      __typename
    }
    updatedAt
    user {
      cards
      cognitoUserName
      computerIP
      createdAt
      email
      isAdmin
      name
      phone
      picture
      sessionStart
      surname
      updatedAt
      userId
      userPrograms
      __typename
    }
    userDataId
    userId
    userStatus
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserDataMutationVariables,
  APITypes.UpdateUserDataMutation
>;
export const updateUserProgram = /* GraphQL */ `mutation UpdateUserProgram(
  $condition: ModelUserProgramConditionInput
  $input: UpdateUserProgramInput!
) {
  updateUserProgram(condition: $condition, input: $input) {
    createdAt
    currentStatus
    email
    expiredAt
    isOpen
    nextQuestion
    programName
    treasure
    updatedAt
    userProgramId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProgramMutationVariables,
  APITypes.UpdateUserProgramMutation
>;

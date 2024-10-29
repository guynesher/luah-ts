/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAdress = /* GraphQL */ `query GetAdress($userId: ID!) {
  getAdress(userId: $userId) {
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
` as GeneratedQuery<APITypes.GetAdressQueryVariables, APITypes.GetAdressQuery>;
export const getChapter = /* GraphQL */ `query GetChapter($chapterId: ID!) {
  getChapter(chapterId: $chapterId) {
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
` as GeneratedQuery<
  APITypes.GetChapterQueryVariables,
  APITypes.GetChapterQuery
>;
export const getContact = /* GraphQL */ `query GetContact($contactId: ID!) {
  getContact(contactId: $contactId) {
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
` as GeneratedQuery<
  APITypes.GetContactQueryVariables,
  APITypes.GetContactQuery
>;
export const getItem = /* GraphQL */ `query GetItem($itemId: ID!) {
  getItem(itemId: $itemId) {
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
` as GeneratedQuery<APITypes.GetItemQueryVariables, APITypes.GetItemQuery>;
export const getLevel = /* GraphQL */ `query GetLevel($levelId: ID!) {
  getLevel(levelId: $levelId) {
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
` as GeneratedQuery<APITypes.GetLevelQueryVariables, APITypes.GetLevelQuery>;
export const getOrder = /* GraphQL */ `query GetOrder($orderId: ID!) {
  getOrder(orderId: $orderId) {
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
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const getProgram = /* GraphQL */ `query GetProgram($programId: ID!) {
  getProgram(programId: $programId) {
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
` as GeneratedQuery<
  APITypes.GetProgramQueryVariables,
  APITypes.GetProgramQuery
>;
export const getQuestion = /* GraphQL */ `query GetQuestion($questionId: ID!) {
  getQuestion(questionId: $questionId) {
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
` as GeneratedQuery<
  APITypes.GetQuestionQueryVariables,
  APITypes.GetQuestionQuery
>;
export const getRecommendation = /* GraphQL */ `query GetRecommendation($recommendationId: ID!) {
  getRecommendation(recommendationId: $recommendationId) {
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
` as GeneratedQuery<
  APITypes.GetRecommendationQueryVariables,
  APITypes.GetRecommendationQuery
>;
export const getReport = /* GraphQL */ `query GetReport($reportId: ID!) {
  getReport(reportId: $reportId) {
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
` as GeneratedQuery<APITypes.GetReportQueryVariables, APITypes.GetReportQuery>;
export const getReportData = /* GraphQL */ `query GetReportData($id: ID!) {
  getReportData(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetReportDataQueryVariables,
  APITypes.GetReportDataQuery
>;
export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const getUser = /* GraphQL */ `query GetUser($userId: ID!) {
  getUser(userId: $userId) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getUserByEmail = /* GraphQL */ `query GetUserByEmail(
  $email: AWSEmail!
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  getUserByEmail(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserByEmailQueryVariables,
  APITypes.GetUserByEmailQuery
>;
export const getUserData = /* GraphQL */ `query GetUserData($userDataId: ID!) {
  getUserData(userDataId: $userDataId) {
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
` as GeneratedQuery<
  APITypes.GetUserDataQueryVariables,
  APITypes.GetUserDataQuery
>;
export const getUserProgram = /* GraphQL */ `query GetUserProgram($userProgramId: ID!) {
  getUserProgram(userProgramId: $userProgramId) {
    chapterAverage
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
` as GeneratedQuery<
  APITypes.GetUserProgramQueryVariables,
  APITypes.GetUserProgramQuery
>;
export const listAdresses = /* GraphQL */ `query ListAdresses(
  $filter: ModelAdressFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: ID
) {
  listAdresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdressesQueryVariables,
  APITypes.ListAdressesQuery
>;
export const listChapters = /* GraphQL */ `query ListChapters(
  $chapterId: ID
  $filter: ModelChapterFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listChapters(
    chapterId: $chapterId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChaptersQueryVariables,
  APITypes.ListChaptersQuery
>;
export const listChaptersByLevelNumber = /* GraphQL */ `query ListChaptersByLevelNumber(
  $filter: ModelChapterFilterInput
  $levelNumber: Int!
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listChaptersByLevelNumber(
    filter: $filter
    levelNumber: $levelNumber
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChaptersByLevelNumberQueryVariables,
  APITypes.ListChaptersByLevelNumberQuery
>;
export const listContactByEmail = /* GraphQL */ `query ListContactByEmail(
  $email: AWSEmail!
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listContactByEmail(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      contactId
      createdAt
      email
      isAnswered
      name
      phone
      text
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContactByEmailQueryVariables,
  APITypes.ListContactByEmailQuery
>;
export const listContactByUserId = /* GraphQL */ `query ListContactByUserId(
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: ID!
) {
  listContactByUserId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
      contactId
      createdAt
      email
      isAnswered
      name
      phone
      text
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContactByUserIdQueryVariables,
  APITypes.ListContactByUserIdQuery
>;
export const listContacts = /* GraphQL */ `query ListContacts(
  $contactId: ID
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listContacts(
    contactId: $contactId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      contactId
      createdAt
      email
      isAnswered
      name
      phone
      text
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContactsQueryVariables,
  APITypes.ListContactsQuery
>;
export const listDatasByChapter = /* GraphQL */ `query ListDatasByChapter(
  $chapterId: ID!
  $filter: ModelUserDataFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listDatasByChapter(
    chapterId: $chapterId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDatasByChapterQueryVariables,
  APITypes.ListDatasByChapterQuery
>;
export const listDatasByChapterAndUser = /* GraphQL */ `query ListDatasByChapterAndUser(
  $chapterId: ID!
  $filter: ModelUserDataFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: ModelIDKeyConditionInput
) {
  listDatasByChapterAndUser(
    chapterId: $chapterId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDatasByChapterAndUserQueryVariables,
  APITypes.ListDatasByChapterAndUserQuery
>;
export const listDatasByLevel = /* GraphQL */ `query ListDatasByLevel(
  $filter: ModelUserDataFilterInput
  $levelId: ID!
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listDatasByLevel(
    filter: $filter
    levelId: $levelId
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDatasByLevelQueryVariables,
  APITypes.ListDatasByLevelQuery
>;
export const listDatasByLevelAndUser = /* GraphQL */ `query ListDatasByLevelAndUser(
  $filter: ModelUserDataFilterInput
  $levelId: ID!
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: ModelIDKeyConditionInput
) {
  listDatasByLevelAndUser(
    filter: $filter
    levelId: $levelId
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDatasByLevelAndUserQueryVariables,
  APITypes.ListDatasByLevelAndUserQuery
>;
export const listDatasByProgram = /* GraphQL */ `query ListDatasByProgram(
  $filter: ModelUserDataFilterInput
  $limit: Int
  $nextToken: String
  $programId: ID!
  $sortDirection: ModelSortDirection
) {
  listDatasByProgram(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    programId: $programId
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDatasByProgramQueryVariables,
  APITypes.ListDatasByProgramQuery
>;
export const listDatasByProgramAndUser = /* GraphQL */ `query ListDatasByProgramAndUser(
  $filter: ModelUserDataFilterInput
  $limit: Int
  $nextToken: String
  $programId: ID!
  $sortDirection: ModelSortDirection
  $userId: ModelIDKeyConditionInput
) {
  listDatasByProgramAndUser(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    programId: $programId
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDatasByProgramAndUserQueryVariables,
  APITypes.ListDatasByProgramAndUserQuery
>;
export const listDatasByQuestion = /* GraphQL */ `query ListDatasByQuestion(
  $filter: ModelUserDataFilterInput
  $limit: Int
  $nextToken: String
  $questionId: ID!
  $sortDirection: ModelSortDirection
) {
  listDatasByQuestion(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    questionId: $questionId
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDatasByQuestionQueryVariables,
  APITypes.ListDatasByQuestionQuery
>;
export const listDatasByQuestionAndUser = /* GraphQL */ `query ListDatasByQuestionAndUser(
  $filter: ModelUserDataFilterInput
  $limit: Int
  $nextToken: String
  $questionId: ID!
  $sortDirection: ModelSortDirection
  $userId: ModelIDKeyConditionInput
) {
  listDatasByQuestionAndUser(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    questionId: $questionId
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDatasByQuestionAndUserQueryVariables,
  APITypes.ListDatasByQuestionAndUserQuery
>;
export const listDatasByUser = /* GraphQL */ `query ListDatasByUser(
  $filter: ModelUserDataFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: ID!
) {
  listDatasByUser(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDatasByUserQueryVariables,
  APITypes.ListDatasByUserQuery
>;
export const listItems = /* GraphQL */ `query ListItems(
  $filter: ModelItemFilterInput
  $itemId: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listItems(
    filter: $filter
    itemId: $itemId
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
      questionId
      questionNumber
      segments
      step
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
export const listItemsByQuestionId = /* GraphQL */ `query ListItemsByQuestionId(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
  $questionId: ID!
  $sortDirection: ModelSortDirection
) {
  listItemsByQuestionId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    questionId: $questionId
    sortDirection: $sortDirection
  ) {
    items {
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
      questionId
      questionNumber
      segments
      step
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListItemsByQuestionIdQueryVariables,
  APITypes.ListItemsByQuestionIdQuery
>;
export const listLevels = /* GraphQL */ `query ListLevels(
  $filter: ModelLevelFilterInput
  $levelId: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLevels(
    filter: $filter
    levelId: $levelId
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLevelsQueryVariables,
  APITypes.ListLevelsQuery
>;
export const listLevelsByProgramName = /* GraphQL */ `query ListLevelsByProgramName(
  $filter: ModelLevelFilterInput
  $limit: Int
  $nextToken: String
  $programName: String!
  $sortDirection: ModelSortDirection
) {
  listLevelsByProgramName(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    programName: $programName
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLevelsByProgramNameQueryVariables,
  APITypes.ListLevelsByProgramNameQuery
>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
  $orderId: ID
  $sortDirection: ModelSortDirection
) {
  listOrders(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    orderId: $orderId
    sortDirection: $sortDirection
  ) {
    items {
      billingDetails
      createdAt
      isDelivered
      isPaid
      orderId
      refNumber
      totalGoldCoins
      totalPrice
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const listOrdersByUserId = /* GraphQL */ `query ListOrdersByUserId(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: ID!
) {
  listOrdersByUserId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
      billingDetails
      createdAt
      isDelivered
      isPaid
      orderId
      refNumber
      totalGoldCoins
      totalPrice
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersByUserIdQueryVariables,
  APITypes.ListOrdersByUserIdQuery
>;
export const listOrdersByUserRefNumber = /* GraphQL */ `query ListOrdersByUserRefNumber(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
  $refNumber: String!
  $sortDirection: ModelSortDirection
) {
  listOrdersByUserRefNumber(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    refNumber: $refNumber
    sortDirection: $sortDirection
  ) {
    items {
      billingDetails
      createdAt
      isDelivered
      isPaid
      orderId
      refNumber
      totalGoldCoins
      totalPrice
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersByUserRefNumberQueryVariables,
  APITypes.ListOrdersByUserRefNumberQuery
>;
export const listPrograms = /* GraphQL */ `query ListPrograms(
  $filter: ModelProgramFilterInput
  $limit: Int
  $nextToken: String
  $programId: ID
  $sortDirection: ModelSortDirection
) {
  listPrograms(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    programId: $programId
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgramsQueryVariables,
  APITypes.ListProgramsQuery
>;
export const listQuestions = /* GraphQL */ `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
  $questionId: ID
  $sortDirection: ModelSortDirection
) {
  listQuestions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    questionId: $questionId
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuestionsQueryVariables,
  APITypes.ListQuestionsQuery
>;
export const listQuestionsByChapterNumber = /* GraphQL */ `query ListQuestionsByChapterNumber(
  $chapterNumber: Int!
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listQuestionsByChapterNumber(
    chapterNumber: $chapterNumber
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuestionsByChapterNumberQueryVariables,
  APITypes.ListQuestionsByChapterNumberQuery
>;
export const listRecommendationByUserId = /* GraphQL */ `query ListRecommendationByUserId(
  $filter: ModelRecommendationFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: ID!
) {
  listRecommendationByUserId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
      createdAt
      name
      rating
      recommendationId
      text
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecommendationByUserIdQueryVariables,
  APITypes.ListRecommendationByUserIdQuery
>;
export const listRecommendations = /* GraphQL */ `query ListRecommendations(
  $filter: ModelRecommendationFilterInput
  $limit: Int
  $nextToken: String
  $recommendationId: ID
  $sortDirection: ModelSortDirection
) {
  listRecommendations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    recommendationId: $recommendationId
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      name
      rating
      recommendationId
      text
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecommendationsQueryVariables,
  APITypes.ListRecommendationsQuery
>;
export const listReportData = /* GraphQL */ `query ListReportData(
  $filter: ModelReportDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listReportData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      reportId
      updatedAt
      userDataId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportDataQueryVariables,
  APITypes.ListReportDataQuery
>;
export const listReports = /* GraphQL */ `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
  $reportId: ID
  $sortDirection: ModelSortDirection
) {
  listReports(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    reportId: $reportId
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      reportData
      reportId
      reportRef
      reportType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportsQueryVariables,
  APITypes.ListReportsQuery
>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const listUserData = /* GraphQL */ `query ListUserData(
  $filter: ModelUserDataFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userDataId: ID
) {
  listUserData(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userDataId: $userDataId
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserDataQueryVariables,
  APITypes.ListUserDataQuery
>;
export const listUserPrograms = /* GraphQL */ `query ListUserPrograms(
  $filter: ModelUserProgramFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userProgramId: ID
) {
  listUserPrograms(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userProgramId: $userProgramId
  ) {
    items {
      chapterAverage
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProgramsQueryVariables,
  APITypes.ListUserProgramsQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: ID
) {
  listUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const userProgramByEmail = /* GraphQL */ `query UserProgramByEmail(
  $email: AWSEmail!
  $filter: ModelUserProgramFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  userProgramByEmail(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      chapterAverage
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserProgramByEmailQueryVariables,
  APITypes.UserProgramByEmailQuery
>;
export const userProgramByEmailAndProgramName = /* GraphQL */ `query UserProgramByEmailAndProgramName(
  $email: AWSEmail!
  $filter: ModelUserProgramFilterInput
  $limit: Int
  $nextToken: String
  $programName: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
) {
  userProgramByEmailAndProgramName(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    programName: $programName
    sortDirection: $sortDirection
  ) {
    items {
      chapterAverage
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserProgramByEmailAndProgramNameQueryVariables,
  APITypes.UserProgramByEmailAndProgramNameQuery
>;

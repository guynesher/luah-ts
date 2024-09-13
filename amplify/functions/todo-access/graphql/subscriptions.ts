/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAdress = /* GraphQL */ `subscription OnCreateAdress($filter: ModelSubscriptionAdressFilterInput) {
  onCreateAdress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAdressSubscriptionVariables,
  APITypes.OnCreateAdressSubscription
>;
export const onCreateChapter = /* GraphQL */ `subscription OnCreateChapter($filter: ModelSubscriptionChapterFilterInput) {
  onCreateChapter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChapterSubscriptionVariables,
  APITypes.OnCreateChapterSubscription
>;
export const onCreateContact = /* GraphQL */ `subscription OnCreateContact($filter: ModelSubscriptionContactFilterInput) {
  onCreateContact(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContactSubscriptionVariables,
  APITypes.OnCreateContactSubscription
>;
export const onCreateItem = /* GraphQL */ `subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
  onCreateItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItemSubscriptionVariables,
  APITypes.OnCreateItemSubscription
>;
export const onCreateLevel = /* GraphQL */ `subscription OnCreateLevel($filter: ModelSubscriptionLevelFilterInput) {
  onCreateLevel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLevelSubscriptionVariables,
  APITypes.OnCreateLevelSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onCreateProgram = /* GraphQL */ `subscription OnCreateProgram($filter: ModelSubscriptionProgramFilterInput) {
  onCreateProgram(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProgramSubscriptionVariables,
  APITypes.OnCreateProgramSubscription
>;
export const onCreateQuestion = /* GraphQL */ `subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
  onCreateQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuestionSubscriptionVariables,
  APITypes.OnCreateQuestionSubscription
>;
export const onCreateRecommendation = /* GraphQL */ `subscription OnCreateRecommendation(
  $filter: ModelSubscriptionRecommendationFilterInput
) {
  onCreateRecommendation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRecommendationSubscriptionVariables,
  APITypes.OnCreateRecommendationSubscription
>;
export const onCreateReport = /* GraphQL */ `subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
  onCreateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReportSubscriptionVariables,
  APITypes.OnCreateReportSubscription
>;
export const onCreateReportData = /* GraphQL */ `subscription OnCreateReportData(
  $filter: ModelSubscriptionReportDataFilterInput
) {
  onCreateReportData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReportDataSubscriptionVariables,
  APITypes.OnCreateReportDataSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onCreateUserData = /* GraphQL */ `subscription OnCreateUserData($filter: ModelSubscriptionUserDataFilterInput) {
  onCreateUserData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserDataSubscriptionVariables,
  APITypes.OnCreateUserDataSubscription
>;
export const onCreateUserProgram = /* GraphQL */ `subscription OnCreateUserProgram(
  $filter: ModelSubscriptionUserProgramFilterInput
) {
  onCreateUserProgram(filter: $filter) {
    createdAt
    currentStatus
    email
    expiredAt
    isOpen
    nextQuestion
    programName
    updatedAt
    userProgramId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserProgramSubscriptionVariables,
  APITypes.OnCreateUserProgramSubscription
>;
export const onDeleteAdress = /* GraphQL */ `subscription OnDeleteAdress($filter: ModelSubscriptionAdressFilterInput) {
  onDeleteAdress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAdressSubscriptionVariables,
  APITypes.OnDeleteAdressSubscription
>;
export const onDeleteChapter = /* GraphQL */ `subscription OnDeleteChapter($filter: ModelSubscriptionChapterFilterInput) {
  onDeleteChapter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChapterSubscriptionVariables,
  APITypes.OnDeleteChapterSubscription
>;
export const onDeleteContact = /* GraphQL */ `subscription OnDeleteContact($filter: ModelSubscriptionContactFilterInput) {
  onDeleteContact(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContactSubscriptionVariables,
  APITypes.OnDeleteContactSubscription
>;
export const onDeleteItem = /* GraphQL */ `subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
  onDeleteItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItemSubscriptionVariables,
  APITypes.OnDeleteItemSubscription
>;
export const onDeleteLevel = /* GraphQL */ `subscription OnDeleteLevel($filter: ModelSubscriptionLevelFilterInput) {
  onDeleteLevel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLevelSubscriptionVariables,
  APITypes.OnDeleteLevelSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onDeleteProgram = /* GraphQL */ `subscription OnDeleteProgram($filter: ModelSubscriptionProgramFilterInput) {
  onDeleteProgram(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProgramSubscriptionVariables,
  APITypes.OnDeleteProgramSubscription
>;
export const onDeleteQuestion = /* GraphQL */ `subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
  onDeleteQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionSubscriptionVariables,
  APITypes.OnDeleteQuestionSubscription
>;
export const onDeleteRecommendation = /* GraphQL */ `subscription OnDeleteRecommendation(
  $filter: ModelSubscriptionRecommendationFilterInput
) {
  onDeleteRecommendation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRecommendationSubscriptionVariables,
  APITypes.OnDeleteRecommendationSubscription
>;
export const onDeleteReport = /* GraphQL */ `subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
  onDeleteReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReportSubscriptionVariables,
  APITypes.OnDeleteReportSubscription
>;
export const onDeleteReportData = /* GraphQL */ `subscription OnDeleteReportData(
  $filter: ModelSubscriptionReportDataFilterInput
) {
  onDeleteReportData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReportDataSubscriptionVariables,
  APITypes.OnDeleteReportDataSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onDeleteUserData = /* GraphQL */ `subscription OnDeleteUserData($filter: ModelSubscriptionUserDataFilterInput) {
  onDeleteUserData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserDataSubscriptionVariables,
  APITypes.OnDeleteUserDataSubscription
>;
export const onDeleteUserProgram = /* GraphQL */ `subscription OnDeleteUserProgram(
  $filter: ModelSubscriptionUserProgramFilterInput
) {
  onDeleteUserProgram(filter: $filter) {
    createdAt
    currentStatus
    email
    expiredAt
    isOpen
    nextQuestion
    programName
    updatedAt
    userProgramId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserProgramSubscriptionVariables,
  APITypes.OnDeleteUserProgramSubscription
>;
export const onUpdateAdress = /* GraphQL */ `subscription OnUpdateAdress($filter: ModelSubscriptionAdressFilterInput) {
  onUpdateAdress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAdressSubscriptionVariables,
  APITypes.OnUpdateAdressSubscription
>;
export const onUpdateChapter = /* GraphQL */ `subscription OnUpdateChapter($filter: ModelSubscriptionChapterFilterInput) {
  onUpdateChapter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChapterSubscriptionVariables,
  APITypes.OnUpdateChapterSubscription
>;
export const onUpdateContact = /* GraphQL */ `subscription OnUpdateContact($filter: ModelSubscriptionContactFilterInput) {
  onUpdateContact(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContactSubscriptionVariables,
  APITypes.OnUpdateContactSubscription
>;
export const onUpdateItem = /* GraphQL */ `subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
  onUpdateItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItemSubscriptionVariables,
  APITypes.OnUpdateItemSubscription
>;
export const onUpdateLevel = /* GraphQL */ `subscription OnUpdateLevel($filter: ModelSubscriptionLevelFilterInput) {
  onUpdateLevel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLevelSubscriptionVariables,
  APITypes.OnUpdateLevelSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onUpdateProgram = /* GraphQL */ `subscription OnUpdateProgram($filter: ModelSubscriptionProgramFilterInput) {
  onUpdateProgram(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProgramSubscriptionVariables,
  APITypes.OnUpdateProgramSubscription
>;
export const onUpdateQuestion = /* GraphQL */ `subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
  onUpdateQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionSubscriptionVariables,
  APITypes.OnUpdateQuestionSubscription
>;
export const onUpdateRecommendation = /* GraphQL */ `subscription OnUpdateRecommendation(
  $filter: ModelSubscriptionRecommendationFilterInput
) {
  onUpdateRecommendation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRecommendationSubscriptionVariables,
  APITypes.OnUpdateRecommendationSubscription
>;
export const onUpdateReport = /* GraphQL */ `subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
  onUpdateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReportSubscriptionVariables,
  APITypes.OnUpdateReportSubscription
>;
export const onUpdateReportData = /* GraphQL */ `subscription OnUpdateReportData(
  $filter: ModelSubscriptionReportDataFilterInput
) {
  onUpdateReportData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReportDataSubscriptionVariables,
  APITypes.OnUpdateReportDataSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    content
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onUpdateUserData = /* GraphQL */ `subscription OnUpdateUserData($filter: ModelSubscriptionUserDataFilterInput) {
  onUpdateUserData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserDataSubscriptionVariables,
  APITypes.OnUpdateUserDataSubscription
>;
export const onUpdateUserProgram = /* GraphQL */ `subscription OnUpdateUserProgram(
  $filter: ModelSubscriptionUserProgramFilterInput
) {
  onUpdateUserProgram(filter: $filter) {
    createdAt
    currentStatus
    email
    expiredAt
    isOpen
    nextQuestion
    programName
    updatedAt
    userProgramId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserProgramSubscriptionVariables,
  APITypes.OnUpdateUserProgramSubscription
>;

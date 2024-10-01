/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Adress = {
  __typename: "Adress",
  appartment?: string | null,
  city?: string | null,
  createdAt: string,
  house?: string | null,
  street?: string | null,
  updatedAt: string,
  user?: User | null,
  userId: string,
  zipcode?: string | null,
};

export type User = {
  __typename: "User",
  adress?: Adress | null,
  cards?: Array< string | null > | null,
  cognitoUserName?: string | null,
  computerIP?: string | null,
  contacts?: ModelContactConnection | null,
  createdAt: string,
  email?: string | null,
  isAdmin?: boolean | null,
  name?: string | null,
  orders?: ModelOrderConnection | null,
  phone?: string | null,
  picture?: string | null,
  recommendations?: ModelRecommendationConnection | null,
  sessionStart?: number | null,
  surname?: string | null,
  updatedAt: string,
  userDatas?: ModelUserDataConnection | null,
  userId: string,
  userPrograms?: Array< string | null > | null,
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection",
  items:  Array<Contact | null >,
  nextToken?: string | null,
};

export type Contact = {
  __typename: "Contact",
  contactId: string,
  createdAt?: number | null,
  email?: string | null,
  isAnswered?: boolean | null,
  name?: string | null,
  phone?: string | null,
  text?: string | null,
  updatedAt: string,
  user?: User | null,
  userId?: string | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  billingDetails?: string | null,
  createdAt: string,
  isDelivered?: boolean | null,
  isPaid?: boolean | null,
  orderId: string,
  refNumber?: string | null,
  totalGoldCoins?: number | null,
  totalPrice?: number | null,
  updatedAt: string,
  user?: User | null,
  userId?: string | null,
};

export type ModelRecommendationConnection = {
  __typename: "ModelRecommendationConnection",
  items:  Array<Recommendation | null >,
  nextToken?: string | null,
};

export type Recommendation = {
  __typename: "Recommendation",
  createdAt?: number | null,
  name?: string | null,
  rating?: number | null,
  recommendationId: string,
  text?: string | null,
  updatedAt: string,
  user?: User | null,
  userId?: string | null,
};

export type ModelUserDataConnection = {
  __typename: "ModelUserDataConnection",
  items:  Array<UserData | null >,
  nextToken?: string | null,
};

export type UserData = {
  __typename: "UserData",
  answer?: string | null,
  chapterId?: string | null,
  createdAt?: number | null,
  currentPermutation?: string | null,
  levelId?: string | null,
  nextQuestion?: string | null,
  precent?: number | null,
  programId?: string | null,
  question?: Question | null,
  questionId?: string | null,
  reports?: ModelReportDataConnection | null,
  updatedAt: string,
  user?: User | null,
  userDataId: string,
  userId?: string | null,
  userStatus?: string | null,
};

export type Question = {
  __typename: "Question",
  chapter?: Chapter | null,
  chapterId?: string | null,
  chapterNumber?: number | null,
  createdAt: string,
  items?: ModelItemConnection | null,
  permutationList?: string | null,
  questionAnimation?: string | null,
  questionAnimationName?: string | null,
  questionDescription?: string | null,
  questionId: string,
  questionName?: string | null,
  questionNumber?: number | null,
  questionSubject?: string | null,
  updatedAt: string,
  userDatas?: ModelUserDataConnection | null,
};

export type Chapter = {
  __typename: "Chapter",
  bundleNumber?: Array< number | null > | null,
  chapterAnimation?: string | null,
  chapterAnimationName?: string | null,
  chapterDescription?: string | null,
  chapterId: string,
  chapterName?: string | null,
  chapterNumber?: number | null,
  chapterSubject?: string | null,
  conditionsList?: string | null,
  createdAt: string,
  level?: Level | null,
  levelId?: string | null,
  levelNumber?: number | null,
  questions?: ModelQuestionConnection | null,
  updatedAt: string,
};

export type Level = {
  __typename: "Level",
  chapters?: ModelChapterConnection | null,
  createdAt: string,
  levelAnimation?: string | null,
  levelAnimationName?: string | null,
  levelDescription?: string | null,
  levelId: string,
  levelName?: string | null,
  levelNumber?: number | null,
  levelSubject?: string | null,
  program?: Program | null,
  programName?: string | null,
  updatedAt: string,
};

export type ModelChapterConnection = {
  __typename: "ModelChapterConnection",
  items:  Array<Chapter | null >,
  nextToken?: string | null,
};

export type Program = {
  __typename: "Program",
  createdAt: string,
  levels?: ModelLevelConnection | null,
  programAnimation?: string | null,
  programAnimationName?: string | null,
  programDescription?: string | null,
  programId: string,
  programName?: string | null,
  programNumber?: number | null,
  programSubject?: string | null,
  updatedAt: string,
};

export type ModelLevelConnection = {
  __typename: "ModelLevelConnection",
  items:  Array<Level | null >,
  nextToken?: string | null,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type Item = {
  __typename: "Item",
  animation?: string | null,
  animationName?: string | null,
  audioData?: string | null,
  autoplay?: boolean | null,
  createdAt: string,
  isAudioClick?: boolean | null,
  isAudioHoover?: boolean | null,
  isAudioPlay?: boolean | null,
  itemCondition?: Array< string | null > | null,
  itemId: string,
  itemNumber?: number | null,
  itemPosition?: Array< string | null > | null,
  itemSize?: Array< string | null > | null,
  itemType?: string | null,
  loop?: boolean | null,
  question?: Question | null,
  questionId: string,
  questionNumber?: number | null,
  segments?: Array< number | null > | null,
  step?: number | null,
  updatedAt: string,
};

export type ModelReportDataConnection = {
  __typename: "ModelReportDataConnection",
  items:  Array<ReportData | null >,
  nextToken?: string | null,
};

export type ReportData = {
  __typename: "ReportData",
  createdAt: string,
  id: string,
  report?: Report | null,
  reportId: string,
  updatedAt: string,
  userData?: UserData | null,
  userDataId: string,
};

export type Report = {
  __typename: "Report",
  createdAt: string,
  reportData?: string | null,
  reportId: string,
  reportRef?: string | null,
  reportType?: string | null,
  updatedAt: string,
  userDatas?: ModelReportDataConnection | null,
};

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  createdAt: string,
  id: string,
  updatedAt: string,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  cards?: ModelStringInput | null,
  cognitoUserName?: ModelStringInput | null,
  computerIP?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isAdmin?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  phone?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  sessionStart?: ModelIntInput | null,
  surname?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  userPrograms?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type UserProgram = {
  __typename: "UserProgram",
  createdAt: string,
  currentStatus?: string | null,
  email?: string | null,
  expiredAt?: number | null,
  isOpen?: boolean | null,
  nextQuestion?: string | null,
  programName?: string | null,
  treasure?: number | null,
  updatedAt: string,
  userProgramId: string,
};

export type ModelAdressFilterInput = {
  and?: Array< ModelAdressFilterInput | null > | null,
  appartment?: ModelStringInput | null,
  city?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  house?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelAdressFilterInput | null,
  or?: Array< ModelAdressFilterInput | null > | null,
  street?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  zipcode?: ModelStringInput | null,
};

export type ModelAdressConnection = {
  __typename: "ModelAdressConnection",
  items:  Array<Adress | null >,
  nextToken?: string | null,
};

export type ModelChapterFilterInput = {
  and?: Array< ModelChapterFilterInput | null > | null,
  bundleNumber?: ModelIntInput | null,
  chapterAnimation?: ModelStringInput | null,
  chapterAnimationName?: ModelStringInput | null,
  chapterDescription?: ModelStringInput | null,
  chapterId?: ModelIDInput | null,
  chapterName?: ModelStringInput | null,
  chapterNumber?: ModelIntInput | null,
  chapterSubject?: ModelStringInput | null,
  conditionsList?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  levelId?: ModelIDInput | null,
  levelNumber?: ModelIntInput | null,
  not?: ModelChapterFilterInput | null,
  or?: Array< ModelChapterFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelContactFilterInput = {
  and?: Array< ModelContactFilterInput | null > | null,
  contactId?: ModelIDInput | null,
  createdAt?: ModelIntInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isAnswered?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelContactFilterInput | null,
  or?: Array< ModelContactFilterInput | null > | null,
  phone?: ModelStringInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelUserDataFilterInput = {
  and?: Array< ModelUserDataFilterInput | null > | null,
  answer?: ModelStringInput | null,
  chapterId?: ModelIDInput | null,
  createdAt?: ModelIntInput | null,
  currentPermutation?: ModelStringInput | null,
  id?: ModelIDInput | null,
  levelId?: ModelIDInput | null,
  nextQuestion?: ModelStringInput | null,
  not?: ModelUserDataFilterInput | null,
  or?: Array< ModelUserDataFilterInput | null > | null,
  precent?: ModelFloatInput | null,
  programId?: ModelIDInput | null,
  questionId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userDataId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  userStatus?: ModelStringInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDKeyConditionInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
};

export type ModelItemFilterInput = {
  and?: Array< ModelItemFilterInput | null > | null,
  animation?: ModelStringInput | null,
  animationName?: ModelStringInput | null,
  audioData?: ModelStringInput | null,
  autoplay?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isAudioClick?: ModelBooleanInput | null,
  isAudioHoover?: ModelBooleanInput | null,
  isAudioPlay?: ModelBooleanInput | null,
  itemCondition?: ModelStringInput | null,
  itemId?: ModelIDInput | null,
  itemNumber?: ModelIntInput | null,
  itemPosition?: ModelStringInput | null,
  itemSize?: ModelStringInput | null,
  itemType?: ModelStringInput | null,
  loop?: ModelBooleanInput | null,
  not?: ModelItemFilterInput | null,
  or?: Array< ModelItemFilterInput | null > | null,
  questionId?: ModelIDInput | null,
  questionNumber?: ModelIntInput | null,
  segments?: ModelIntInput | null,
  step?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelLevelFilterInput = {
  and?: Array< ModelLevelFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  levelAnimation?: ModelStringInput | null,
  levelAnimationName?: ModelStringInput | null,
  levelDescription?: ModelStringInput | null,
  levelId?: ModelIDInput | null,
  levelName?: ModelStringInput | null,
  levelNumber?: ModelIntInput | null,
  levelSubject?: ModelStringInput | null,
  not?: ModelLevelFilterInput | null,
  or?: Array< ModelLevelFilterInput | null > | null,
  programName?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelOrderFilterInput = {
  and?: Array< ModelOrderFilterInput | null > | null,
  billingDetails?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isDelivered?: ModelBooleanInput | null,
  isPaid?: ModelBooleanInput | null,
  not?: ModelOrderFilterInput | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  orderId?: ModelIDInput | null,
  refNumber?: ModelStringInput | null,
  totalGoldCoins?: ModelIntInput | null,
  totalPrice?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelProgramFilterInput = {
  and?: Array< ModelProgramFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelProgramFilterInput | null,
  or?: Array< ModelProgramFilterInput | null > | null,
  programAnimation?: ModelStringInput | null,
  programAnimationName?: ModelStringInput | null,
  programDescription?: ModelStringInput | null,
  programId?: ModelIDInput | null,
  programName?: ModelStringInput | null,
  programNumber?: ModelIntInput | null,
  programSubject?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelProgramConnection = {
  __typename: "ModelProgramConnection",
  items:  Array<Program | null >,
  nextToken?: string | null,
};

export type ModelQuestionFilterInput = {
  and?: Array< ModelQuestionFilterInput | null > | null,
  chapterId?: ModelIDInput | null,
  chapterNumber?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelQuestionFilterInput | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  permutationList?: ModelStringInput | null,
  questionAnimation?: ModelStringInput | null,
  questionAnimationName?: ModelStringInput | null,
  questionDescription?: ModelStringInput | null,
  questionId?: ModelIDInput | null,
  questionName?: ModelStringInput | null,
  questionNumber?: ModelIntInput | null,
  questionSubject?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelRecommendationFilterInput = {
  and?: Array< ModelRecommendationFilterInput | null > | null,
  createdAt?: ModelIntInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelRecommendationFilterInput | null,
  or?: Array< ModelRecommendationFilterInput | null > | null,
  rating?: ModelIntInput | null,
  recommendationId?: ModelIDInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelReportDataFilterInput = {
  and?: Array< ModelReportDataFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelReportDataFilterInput | null,
  or?: Array< ModelReportDataFilterInput | null > | null,
  reportId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userDataId?: ModelIDInput | null,
};

export type ModelReportFilterInput = {
  and?: Array< ModelReportFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelReportFilterInput | null,
  or?: Array< ModelReportFilterInput | null > | null,
  reportData?: ModelStringInput | null,
  reportId?: ModelIDInput | null,
  reportRef?: ModelStringInput | null,
  reportType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelReportConnection = {
  __typename: "ModelReportConnection",
  items:  Array<Report | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelUserProgramFilterInput = {
  and?: Array< ModelUserProgramFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  currentStatus?: ModelStringInput | null,
  email?: ModelStringInput | null,
  expiredAt?: ModelIntInput | null,
  id?: ModelIDInput | null,
  isOpen?: ModelBooleanInput | null,
  nextQuestion?: ModelStringInput | null,
  not?: ModelUserProgramFilterInput | null,
  or?: Array< ModelUserProgramFilterInput | null > | null,
  programName?: ModelStringInput | null,
  treasure?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userProgramId?: ModelIDInput | null,
};

export type ModelUserProgramConnection = {
  __typename: "ModelUserProgramConnection",
  items:  Array<UserProgram | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
};

export type ModelAdressConditionInput = {
  and?: Array< ModelAdressConditionInput | null > | null,
  appartment?: ModelStringInput | null,
  city?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  house?: ModelStringInput | null,
  not?: ModelAdressConditionInput | null,
  or?: Array< ModelAdressConditionInput | null > | null,
  street?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  zipcode?: ModelStringInput | null,
};

export type CreateAdressInput = {
  appartment?: string | null,
  city?: string | null,
  house?: string | null,
  street?: string | null,
  userId: string,
  zipcode?: string | null,
};

export type ModelChapterConditionInput = {
  and?: Array< ModelChapterConditionInput | null > | null,
  bundleNumber?: ModelIntInput | null,
  chapterAnimation?: ModelStringInput | null,
  chapterAnimationName?: ModelStringInput | null,
  chapterDescription?: ModelStringInput | null,
  chapterName?: ModelStringInput | null,
  chapterNumber?: ModelIntInput | null,
  chapterSubject?: ModelStringInput | null,
  conditionsList?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  levelId?: ModelIDInput | null,
  levelNumber?: ModelIntInput | null,
  not?: ModelChapterConditionInput | null,
  or?: Array< ModelChapterConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateChapterInput = {
  bundleNumber?: Array< number | null > | null,
  chapterAnimation?: string | null,
  chapterAnimationName?: string | null,
  chapterDescription?: string | null,
  chapterId: string,
  chapterName?: string | null,
  chapterNumber?: number | null,
  chapterSubject?: string | null,
  conditionsList?: string | null,
  levelId?: string | null,
  levelNumber?: number | null,
};

export type ModelContactConditionInput = {
  and?: Array< ModelContactConditionInput | null > | null,
  createdAt?: ModelIntInput | null,
  email?: ModelStringInput | null,
  isAnswered?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelContactConditionInput | null,
  or?: Array< ModelContactConditionInput | null > | null,
  phone?: ModelStringInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateContactInput = {
  contactId: string,
  createdAt?: number | null,
  email?: string | null,
  isAnswered?: boolean | null,
  name?: string | null,
  phone?: string | null,
  text?: string | null,
  userId?: string | null,
};

export type ModelItemConditionInput = {
  and?: Array< ModelItemConditionInput | null > | null,
  animation?: ModelStringInput | null,
  animationName?: ModelStringInput | null,
  audioData?: ModelStringInput | null,
  autoplay?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  isAudioClick?: ModelBooleanInput | null,
  isAudioHoover?: ModelBooleanInput | null,
  isAudioPlay?: ModelBooleanInput | null,
  itemCondition?: ModelStringInput | null,
  itemNumber?: ModelIntInput | null,
  itemPosition?: ModelStringInput | null,
  itemSize?: ModelStringInput | null,
  itemType?: ModelStringInput | null,
  loop?: ModelBooleanInput | null,
  not?: ModelItemConditionInput | null,
  or?: Array< ModelItemConditionInput | null > | null,
  questionId?: ModelIDInput | null,
  questionNumber?: ModelIntInput | null,
  segments?: ModelIntInput | null,
  step?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateItemInput = {
  animation?: string | null,
  animationName?: string | null,
  audioData?: string | null,
  autoplay?: boolean | null,
  isAudioClick?: boolean | null,
  isAudioHoover?: boolean | null,
  isAudioPlay?: boolean | null,
  itemCondition?: Array< string | null > | null,
  itemId: string,
  itemNumber?: number | null,
  itemPosition?: Array< string | null > | null,
  itemSize?: Array< string | null > | null,
  itemType?: string | null,
  loop?: boolean | null,
  questionId: string,
  questionNumber?: number | null,
  segments?: Array< number | null > | null,
  step?: number | null,
};

export type ModelLevelConditionInput = {
  and?: Array< ModelLevelConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  levelAnimation?: ModelStringInput | null,
  levelAnimationName?: ModelStringInput | null,
  levelDescription?: ModelStringInput | null,
  levelName?: ModelStringInput | null,
  levelNumber?: ModelIntInput | null,
  levelSubject?: ModelStringInput | null,
  not?: ModelLevelConditionInput | null,
  or?: Array< ModelLevelConditionInput | null > | null,
  programName?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateLevelInput = {
  levelAnimation?: string | null,
  levelAnimationName?: string | null,
  levelDescription?: string | null,
  levelId: string,
  levelName?: string | null,
  levelNumber?: number | null,
  levelSubject?: string | null,
  programName?: string | null,
};

export type ModelOrderConditionInput = {
  and?: Array< ModelOrderConditionInput | null > | null,
  billingDetails?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isDelivered?: ModelBooleanInput | null,
  isPaid?: ModelBooleanInput | null,
  not?: ModelOrderConditionInput | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  refNumber?: ModelStringInput | null,
  totalGoldCoins?: ModelIntInput | null,
  totalPrice?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateOrderInput = {
  billingDetails?: string | null,
  isDelivered?: boolean | null,
  isPaid?: boolean | null,
  orderId: string,
  refNumber?: string | null,
  totalGoldCoins?: number | null,
  totalPrice?: number | null,
  userId?: string | null,
};

export type ModelProgramConditionInput = {
  and?: Array< ModelProgramConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelProgramConditionInput | null,
  or?: Array< ModelProgramConditionInput | null > | null,
  programAnimation?: ModelStringInput | null,
  programAnimationName?: ModelStringInput | null,
  programDescription?: ModelStringInput | null,
  programName?: ModelStringInput | null,
  programNumber?: ModelIntInput | null,
  programSubject?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateProgramInput = {
  programAnimation?: string | null,
  programAnimationName?: string | null,
  programDescription?: string | null,
  programId: string,
  programName?: string | null,
  programNumber?: number | null,
  programSubject?: string | null,
};

export type ModelQuestionConditionInput = {
  and?: Array< ModelQuestionConditionInput | null > | null,
  chapterId?: ModelIDInput | null,
  chapterNumber?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelQuestionConditionInput | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  permutationList?: ModelStringInput | null,
  questionAnimation?: ModelStringInput | null,
  questionAnimationName?: ModelStringInput | null,
  questionDescription?: ModelStringInput | null,
  questionName?: ModelStringInput | null,
  questionNumber?: ModelIntInput | null,
  questionSubject?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateQuestionInput = {
  chapterId?: string | null,
  chapterNumber?: number | null,
  permutationList?: string | null,
  questionAnimation?: string | null,
  questionAnimationName?: string | null,
  questionDescription?: string | null,
  questionId: string,
  questionName?: string | null,
  questionNumber?: number | null,
  questionSubject?: string | null,
};

export type ModelRecommendationConditionInput = {
  and?: Array< ModelRecommendationConditionInput | null > | null,
  createdAt?: ModelIntInput | null,
  name?: ModelStringInput | null,
  not?: ModelRecommendationConditionInput | null,
  or?: Array< ModelRecommendationConditionInput | null > | null,
  rating?: ModelIntInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateRecommendationInput = {
  createdAt?: number | null,
  name?: string | null,
  rating?: number | null,
  recommendationId: string,
  text?: string | null,
  userId?: string | null,
};

export type ModelReportConditionInput = {
  and?: Array< ModelReportConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelReportConditionInput | null,
  or?: Array< ModelReportConditionInput | null > | null,
  reportData?: ModelStringInput | null,
  reportRef?: ModelStringInput | null,
  reportType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateReportInput = {
  reportData?: string | null,
  reportId: string,
  reportRef?: string | null,
  reportType?: string | null,
};

export type ModelReportDataConditionInput = {
  and?: Array< ModelReportDataConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelReportDataConditionInput | null,
  or?: Array< ModelReportDataConditionInput | null > | null,
  reportId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userDataId?: ModelIDInput | null,
};

export type CreateReportDataInput = {
  id?: string | null,
  reportId: string,
  userDataId: string,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content?: string | null,
  id?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  cards?: ModelStringInput | null,
  cognitoUserName?: ModelStringInput | null,
  computerIP?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  phone?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  sessionStart?: ModelIntInput | null,
  surname?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userPrograms?: ModelStringInput | null,
};

export type CreateUserInput = {
  cards?: Array< string | null > | null,
  cognitoUserName?: string | null,
  computerIP?: string | null,
  email?: string | null,
  isAdmin?: boolean | null,
  name?: string | null,
  phone?: string | null,
  picture?: string | null,
  sessionStart?: number | null,
  surname?: string | null,
  userId: string,
  userPrograms?: Array< string | null > | null,
};

export type ModelUserDataConditionInput = {
  and?: Array< ModelUserDataConditionInput | null > | null,
  answer?: ModelStringInput | null,
  chapterId?: ModelIDInput | null,
  createdAt?: ModelIntInput | null,
  currentPermutation?: ModelStringInput | null,
  levelId?: ModelIDInput | null,
  nextQuestion?: ModelStringInput | null,
  not?: ModelUserDataConditionInput | null,
  or?: Array< ModelUserDataConditionInput | null > | null,
  precent?: ModelFloatInput | null,
  programId?: ModelIDInput | null,
  questionId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  userStatus?: ModelStringInput | null,
};

export type CreateUserDataInput = {
  answer?: string | null,
  chapterId?: string | null,
  createdAt?: number | null,
  currentPermutation?: string | null,
  levelId?: string | null,
  nextQuestion?: string | null,
  precent?: number | null,
  programId?: string | null,
  questionId?: string | null,
  userDataId: string,
  userId?: string | null,
  userStatus?: string | null,
};

export type ModelUserProgramConditionInput = {
  and?: Array< ModelUserProgramConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  currentStatus?: ModelStringInput | null,
  email?: ModelStringInput | null,
  expiredAt?: ModelIntInput | null,
  isOpen?: ModelBooleanInput | null,
  nextQuestion?: ModelStringInput | null,
  not?: ModelUserProgramConditionInput | null,
  or?: Array< ModelUserProgramConditionInput | null > | null,
  programName?: ModelStringInput | null,
  treasure?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserProgramInput = {
  currentStatus?: string | null,
  email?: string | null,
  expiredAt?: number | null,
  isOpen?: boolean | null,
  nextQuestion?: string | null,
  programName?: string | null,
  treasure?: number | null,
  userProgramId: string,
};

export type DeleteAdressInput = {
  userId: string,
};

export type DeleteChapterInput = {
  chapterId: string,
};

export type DeleteContactInput = {
  contactId: string,
};

export type DeleteItemInput = {
  itemId: string,
};

export type DeleteLevelInput = {
  levelId: string,
};

export type DeleteOrderInput = {
  orderId: string,
};

export type DeleteProgramInput = {
  programId: string,
};

export type DeleteQuestionInput = {
  questionId: string,
};

export type DeleteRecommendationInput = {
  recommendationId: string,
};

export type DeleteReportInput = {
  reportId: string,
};

export type DeleteReportDataInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type DeleteUserInput = {
  userId: string,
};

export type DeleteUserDataInput = {
  userDataId: string,
};

export type DeleteUserProgramInput = {
  userProgramId: string,
};

export type UpdateAdressInput = {
  appartment?: string | null,
  city?: string | null,
  house?: string | null,
  street?: string | null,
  userId: string,
  zipcode?: string | null,
};

export type UpdateChapterInput = {
  bundleNumber?: Array< number | null > | null,
  chapterAnimation?: string | null,
  chapterAnimationName?: string | null,
  chapterDescription?: string | null,
  chapterId: string,
  chapterName?: string | null,
  chapterNumber?: number | null,
  chapterSubject?: string | null,
  conditionsList?: string | null,
  levelId?: string | null,
  levelNumber?: number | null,
};

export type UpdateContactInput = {
  contactId: string,
  createdAt?: number | null,
  email?: string | null,
  isAnswered?: boolean | null,
  name?: string | null,
  phone?: string | null,
  text?: string | null,
  userId?: string | null,
};

export type UpdateItemInput = {
  animation?: string | null,
  animationName?: string | null,
  audioData?: string | null,
  autoplay?: boolean | null,
  isAudioClick?: boolean | null,
  isAudioHoover?: boolean | null,
  isAudioPlay?: boolean | null,
  itemCondition?: Array< string | null > | null,
  itemId: string,
  itemNumber?: number | null,
  itemPosition?: Array< string | null > | null,
  itemSize?: Array< string | null > | null,
  itemType?: string | null,
  loop?: boolean | null,
  questionId?: string | null,
  questionNumber?: number | null,
  segments?: Array< number | null > | null,
  step?: number | null,
};

export type UpdateLevelInput = {
  levelAnimation?: string | null,
  levelAnimationName?: string | null,
  levelDescription?: string | null,
  levelId: string,
  levelName?: string | null,
  levelNumber?: number | null,
  levelSubject?: string | null,
  programName?: string | null,
};

export type UpdateOrderInput = {
  billingDetails?: string | null,
  isDelivered?: boolean | null,
  isPaid?: boolean | null,
  orderId: string,
  refNumber?: string | null,
  totalGoldCoins?: number | null,
  totalPrice?: number | null,
  userId?: string | null,
};

export type UpdateProgramInput = {
  programAnimation?: string | null,
  programAnimationName?: string | null,
  programDescription?: string | null,
  programId: string,
  programName?: string | null,
  programNumber?: number | null,
  programSubject?: string | null,
};

export type UpdateQuestionInput = {
  chapterId?: string | null,
  chapterNumber?: number | null,
  permutationList?: string | null,
  questionAnimation?: string | null,
  questionAnimationName?: string | null,
  questionDescription?: string | null,
  questionId: string,
  questionName?: string | null,
  questionNumber?: number | null,
  questionSubject?: string | null,
};

export type UpdateRecommendationInput = {
  createdAt?: number | null,
  name?: string | null,
  rating?: number | null,
  recommendationId: string,
  text?: string | null,
  userId?: string | null,
};

export type UpdateReportInput = {
  reportData?: string | null,
  reportId: string,
  reportRef?: string | null,
  reportType?: string | null,
};

export type UpdateReportDataInput = {
  id: string,
  reportId?: string | null,
  userDataId?: string | null,
};

export type UpdateTodoInput = {
  content?: string | null,
  id: string,
};

export type UpdateUserInput = {
  cards?: Array< string | null > | null,
  cognitoUserName?: string | null,
  computerIP?: string | null,
  email?: string | null,
  isAdmin?: boolean | null,
  name?: string | null,
  phone?: string | null,
  picture?: string | null,
  sessionStart?: number | null,
  surname?: string | null,
  userId: string,
  userPrograms?: Array< string | null > | null,
};

export type UpdateUserDataInput = {
  answer?: string | null,
  chapterId?: string | null,
  createdAt?: number | null,
  currentPermutation?: string | null,
  levelId?: string | null,
  nextQuestion?: string | null,
  precent?: number | null,
  programId?: string | null,
  questionId?: string | null,
  userDataId: string,
  userId?: string | null,
  userStatus?: string | null,
};

export type UpdateUserProgramInput = {
  currentStatus?: string | null,
  email?: string | null,
  expiredAt?: number | null,
  isOpen?: boolean | null,
  nextQuestion?: string | null,
  programName?: string | null,
  treasure?: number | null,
  userProgramId: string,
};

export type ModelSubscriptionAdressFilterInput = {
  and?: Array< ModelSubscriptionAdressFilterInput | null > | null,
  appartment?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  house?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionAdressFilterInput | null > | null,
  street?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  zipcode?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionChapterFilterInput = {
  and?: Array< ModelSubscriptionChapterFilterInput | null > | null,
  bundleNumber?: ModelSubscriptionIntInput | null,
  chapterAnimation?: ModelSubscriptionStringInput | null,
  chapterAnimationName?: ModelSubscriptionStringInput | null,
  chapterDescription?: ModelSubscriptionStringInput | null,
  chapterId?: ModelSubscriptionIDInput | null,
  chapterName?: ModelSubscriptionStringInput | null,
  chapterNumber?: ModelSubscriptionIntInput | null,
  chapterSubject?: ModelSubscriptionStringInput | null,
  conditionsList?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  levelId?: ModelSubscriptionIDInput | null,
  levelNumber?: ModelSubscriptionIntInput | null,
  or?: Array< ModelSubscriptionChapterFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionContactFilterInput = {
  and?: Array< ModelSubscriptionContactFilterInput | null > | null,
  contactId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionIntInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isAnswered?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionContactFilterInput | null > | null,
  phone?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionItemFilterInput = {
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  animation?: ModelSubscriptionStringInput | null,
  animationName?: ModelSubscriptionStringInput | null,
  audioData?: ModelSubscriptionStringInput | null,
  autoplay?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isAudioClick?: ModelSubscriptionBooleanInput | null,
  isAudioHoover?: ModelSubscriptionBooleanInput | null,
  isAudioPlay?: ModelSubscriptionBooleanInput | null,
  itemCondition?: ModelSubscriptionStringInput | null,
  itemId?: ModelSubscriptionIDInput | null,
  itemNumber?: ModelSubscriptionIntInput | null,
  itemPosition?: ModelSubscriptionStringInput | null,
  itemSize?: ModelSubscriptionStringInput | null,
  itemType?: ModelSubscriptionStringInput | null,
  loop?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
  questionId?: ModelSubscriptionIDInput | null,
  questionNumber?: ModelSubscriptionIntInput | null,
  segments?: ModelSubscriptionIntInput | null,
  step?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionLevelFilterInput = {
  and?: Array< ModelSubscriptionLevelFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  levelAnimation?: ModelSubscriptionStringInput | null,
  levelAnimationName?: ModelSubscriptionStringInput | null,
  levelDescription?: ModelSubscriptionStringInput | null,
  levelId?: ModelSubscriptionIDInput | null,
  levelName?: ModelSubscriptionStringInput | null,
  levelNumber?: ModelSubscriptionIntInput | null,
  levelSubject?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionLevelFilterInput | null > | null,
  programName?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionOrderFilterInput = {
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  billingDetails?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isDelivered?: ModelSubscriptionBooleanInput | null,
  isPaid?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  orderId?: ModelSubscriptionIDInput | null,
  refNumber?: ModelSubscriptionStringInput | null,
  totalGoldCoins?: ModelSubscriptionIntInput | null,
  totalPrice?: ModelSubscriptionFloatInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionProgramFilterInput = {
  and?: Array< ModelSubscriptionProgramFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionProgramFilterInput | null > | null,
  programAnimation?: ModelSubscriptionStringInput | null,
  programAnimationName?: ModelSubscriptionStringInput | null,
  programDescription?: ModelSubscriptionStringInput | null,
  programId?: ModelSubscriptionIDInput | null,
  programName?: ModelSubscriptionStringInput | null,
  programNumber?: ModelSubscriptionIntInput | null,
  programSubject?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionQuestionFilterInput = {
  and?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  chapterId?: ModelSubscriptionIDInput | null,
  chapterNumber?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  permutationList?: ModelSubscriptionStringInput | null,
  questionAnimation?: ModelSubscriptionStringInput | null,
  questionAnimationName?: ModelSubscriptionStringInput | null,
  questionDescription?: ModelSubscriptionStringInput | null,
  questionId?: ModelSubscriptionIDInput | null,
  questionName?: ModelSubscriptionStringInput | null,
  questionNumber?: ModelSubscriptionIntInput | null,
  questionSubject?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionRecommendationFilterInput = {
  and?: Array< ModelSubscriptionRecommendationFilterInput | null > | null,
  createdAt?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionRecommendationFilterInput | null > | null,
  rating?: ModelSubscriptionIntInput | null,
  recommendationId?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionReportFilterInput = {
  and?: Array< ModelSubscriptionReportFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionReportFilterInput | null > | null,
  reportData?: ModelSubscriptionStringInput | null,
  reportId?: ModelSubscriptionIDInput | null,
  reportRef?: ModelSubscriptionStringInput | null,
  reportType?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionReportDataFilterInput = {
  and?: Array< ModelSubscriptionReportDataFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionReportDataFilterInput | null > | null,
  reportId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userDataId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  cards?: ModelSubscriptionStringInput | null,
  cognitoUserName?: ModelSubscriptionStringInput | null,
  computerIP?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isAdmin?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  phone?: ModelSubscriptionStringInput | null,
  picture?: ModelSubscriptionStringInput | null,
  sessionStart?: ModelSubscriptionIntInput | null,
  surname?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  userPrograms?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserDataFilterInput = {
  and?: Array< ModelSubscriptionUserDataFilterInput | null > | null,
  answer?: ModelSubscriptionStringInput | null,
  chapterId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionIntInput | null,
  currentPermutation?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  levelId?: ModelSubscriptionIDInput | null,
  nextQuestion?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserDataFilterInput | null > | null,
  precent?: ModelSubscriptionFloatInput | null,
  programId?: ModelSubscriptionIDInput | null,
  questionId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userDataId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  userStatus?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserProgramFilterInput = {
  and?: Array< ModelSubscriptionUserProgramFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  currentStatus?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  expiredAt?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  isOpen?: ModelSubscriptionBooleanInput | null,
  nextQuestion?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserProgramFilterInput | null > | null,
  programName?: ModelSubscriptionStringInput | null,
  treasure?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProgramId?: ModelSubscriptionIDInput | null,
};

export type GetAdressQueryVariables = {
  userId: string,
};

export type GetAdressQuery = {
  getAdress?:  {
    __typename: "Adress",
    appartment?: string | null,
    city?: string | null,
    createdAt: string,
    house?: string | null,
    street?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId: string,
    zipcode?: string | null,
  } | null,
};

export type GetChapterQueryVariables = {
  chapterId: string,
};

export type GetChapterQuery = {
  getChapter?:  {
    __typename: "Chapter",
    bundleNumber?: Array< number | null > | null,
    chapterAnimation?: string | null,
    chapterAnimationName?: string | null,
    chapterDescription?: string | null,
    chapterId: string,
    chapterName?: string | null,
    chapterNumber?: number | null,
    chapterSubject?: string | null,
    conditionsList?: string | null,
    createdAt: string,
    level?:  {
      __typename: "Level",
      createdAt: string,
      levelAnimation?: string | null,
      levelAnimationName?: string | null,
      levelDescription?: string | null,
      levelId: string,
      levelName?: string | null,
      levelNumber?: number | null,
      levelSubject?: string | null,
      programName?: string | null,
      updatedAt: string,
    } | null,
    levelId?: string | null,
    levelNumber?: number | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetContactQueryVariables = {
  contactId: string,
};

export type GetContactQuery = {
  getContact?:  {
    __typename: "Contact",
    contactId: string,
    createdAt?: number | null,
    email?: string | null,
    isAnswered?: boolean | null,
    name?: string | null,
    phone?: string | null,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  itemId: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    animation?: string | null,
    animationName?: string | null,
    audioData?: string | null,
    autoplay?: boolean | null,
    createdAt: string,
    isAudioClick?: boolean | null,
    isAudioHoover?: boolean | null,
    isAudioPlay?: boolean | null,
    itemCondition?: Array< string | null > | null,
    itemId: string,
    itemNumber?: number | null,
    itemPosition?: Array< string | null > | null,
    itemSize?: Array< string | null > | null,
    itemType?: string | null,
    loop?: boolean | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId: string,
    questionNumber?: number | null,
    segments?: Array< number | null > | null,
    step?: number | null,
    updatedAt: string,
  } | null,
};

export type GetLevelQueryVariables = {
  levelId: string,
};

export type GetLevelQuery = {
  getLevel?:  {
    __typename: "Level",
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    levelAnimation?: string | null,
    levelAnimationName?: string | null,
    levelDescription?: string | null,
    levelId: string,
    levelName?: string | null,
    levelNumber?: number | null,
    levelSubject?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      programAnimation?: string | null,
      programAnimationName?: string | null,
      programDescription?: string | null,
      programId: string,
      programName?: string | null,
      programNumber?: number | null,
      programSubject?: string | null,
      updatedAt: string,
    } | null,
    programName?: string | null,
    updatedAt: string,
  } | null,
};

export type GetOrderQueryVariables = {
  orderId: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    billingDetails?: string | null,
    createdAt: string,
    isDelivered?: boolean | null,
    isPaid?: boolean | null,
    orderId: string,
    refNumber?: string | null,
    totalGoldCoins?: number | null,
    totalPrice?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type GetProgramQueryVariables = {
  programId: string,
};

export type GetProgramQuery = {
  getProgram?:  {
    __typename: "Program",
    createdAt: string,
    levels?:  {
      __typename: "ModelLevelConnection",
      nextToken?: string | null,
    } | null,
    programAnimation?: string | null,
    programAnimationName?: string | null,
    programDescription?: string | null,
    programId: string,
    programName?: string | null,
    programNumber?: number | null,
    programSubject?: string | null,
    updatedAt: string,
  } | null,
};

export type GetQuestionQueryVariables = {
  questionId: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    chapter?:  {
      __typename: "Chapter",
      bundleNumber?: Array< number | null > | null,
      chapterAnimation?: string | null,
      chapterAnimationName?: string | null,
      chapterDescription?: string | null,
      chapterId: string,
      chapterName?: string | null,
      chapterNumber?: number | null,
      chapterSubject?: string | null,
      conditionsList?: string | null,
      createdAt: string,
      levelId?: string | null,
      levelNumber?: number | null,
      updatedAt: string,
    } | null,
    chapterId?: string | null,
    chapterNumber?: number | null,
    createdAt: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    permutationList?: string | null,
    questionAnimation?: string | null,
    questionAnimationName?: string | null,
    questionDescription?: string | null,
    questionId: string,
    questionName?: string | null,
    questionNumber?: number | null,
    questionSubject?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetRecommendationQueryVariables = {
  recommendationId: string,
};

export type GetRecommendationQuery = {
  getRecommendation?:  {
    __typename: "Recommendation",
    createdAt?: number | null,
    name?: string | null,
    rating?: number | null,
    recommendationId: string,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type GetReportQueryVariables = {
  reportId: string,
};

export type GetReportQuery = {
  getReport?:  {
    __typename: "Report",
    createdAt: string,
    reportData?: string | null,
    reportId: string,
    reportRef?: string | null,
    reportType?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetReportDataQueryVariables = {
  id: string,
};

export type GetReportDataQuery = {
  getReportData?:  {
    __typename: "ReportData",
    createdAt: string,
    id: string,
    report?:  {
      __typename: "Report",
      createdAt: string,
      reportData?: string | null,
      reportId: string,
      reportRef?: string | null,
      reportType?: string | null,
      updatedAt: string,
    } | null,
    reportId: string,
    updatedAt: string,
    userData?:  {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null,
    userDataId: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  userId: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    adress?:  {
      __typename: "Adress",
      appartment?: string | null,
      city?: string | null,
      createdAt: string,
      house?: string | null,
      street?: string | null,
      updatedAt: string,
      userId: string,
      zipcode?: string | null,
    } | null,
    cards?: Array< string | null > | null,
    cognitoUserName?: string | null,
    computerIP?: string | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    isAdmin?: boolean | null,
    name?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    picture?: string | null,
    recommendations?:  {
      __typename: "ModelRecommendationConnection",
      nextToken?: string | null,
    } | null,
    sessionStart?: number | null,
    surname?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
    userId: string,
    userPrograms?: Array< string | null > | null,
  } | null,
};

export type GetUserByEmailQueryVariables = {
  email: string,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type GetUserByEmailQuery = {
  getUserByEmail?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserDataQueryVariables = {
  userDataId: string,
};

export type GetUserDataQuery = {
  getUserData?:  {
    __typename: "UserData",
    answer?: string | null,
    chapterId?: string | null,
    createdAt?: number | null,
    currentPermutation?: string | null,
    levelId?: string | null,
    nextQuestion?: string | null,
    precent?: number | null,
    programId?: string | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId?: string | null,
    reports?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userDataId: string,
    userId?: string | null,
    userStatus?: string | null,
  } | null,
};

export type GetUserProgramQueryVariables = {
  userProgramId: string,
};

export type GetUserProgramQuery = {
  getUserProgram?:  {
    __typename: "UserProgram",
    createdAt: string,
    currentStatus?: string | null,
    email?: string | null,
    expiredAt?: number | null,
    isOpen?: boolean | null,
    nextQuestion?: string | null,
    programName?: string | null,
    treasure?: number | null,
    updatedAt: string,
    userProgramId: string,
  } | null,
};

export type ListAdressesQueryVariables = {
  filter?: ModelAdressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId?: string | null,
};

export type ListAdressesQuery = {
  listAdresses?:  {
    __typename: "ModelAdressConnection",
    items:  Array< {
      __typename: "Adress",
      appartment?: string | null,
      city?: string | null,
      createdAt: string,
      house?: string | null,
      street?: string | null,
      updatedAt: string,
      userId: string,
      zipcode?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListChaptersQueryVariables = {
  chapterId?: string | null,
  filter?: ModelChapterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListChaptersQuery = {
  listChapters?:  {
    __typename: "ModelChapterConnection",
    items:  Array< {
      __typename: "Chapter",
      bundleNumber?: Array< number | null > | null,
      chapterAnimation?: string | null,
      chapterAnimationName?: string | null,
      chapterDescription?: string | null,
      chapterId: string,
      chapterName?: string | null,
      chapterNumber?: number | null,
      chapterSubject?: string | null,
      conditionsList?: string | null,
      createdAt: string,
      levelId?: string | null,
      levelNumber?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListChaptersByLevelNumberQueryVariables = {
  filter?: ModelChapterFilterInput | null,
  levelNumber: number,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListChaptersByLevelNumberQuery = {
  listChaptersByLevelNumber?:  {
    __typename: "ModelChapterConnection",
    items:  Array< {
      __typename: "Chapter",
      bundleNumber?: Array< number | null > | null,
      chapterAnimation?: string | null,
      chapterAnimationName?: string | null,
      chapterDescription?: string | null,
      chapterId: string,
      chapterName?: string | null,
      chapterNumber?: number | null,
      chapterSubject?: string | null,
      conditionsList?: string | null,
      createdAt: string,
      levelId?: string | null,
      levelNumber?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListContactByEmailQueryVariables = {
  email: string,
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListContactByEmailQuery = {
  listContactByEmail?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      contactId: string,
      createdAt?: number | null,
      email?: string | null,
      isAnswered?: boolean | null,
      name?: string | null,
      phone?: string | null,
      text?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListContactByUserIdQueryVariables = {
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId: string,
};

export type ListContactByUserIdQuery = {
  listContactByUserId?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      contactId: string,
      createdAt?: number | null,
      email?: string | null,
      isAnswered?: boolean | null,
      name?: string | null,
      phone?: string | null,
      text?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListContactsQueryVariables = {
  contactId?: string | null,
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      contactId: string,
      createdAt?: number | null,
      email?: string | null,
      isAnswered?: boolean | null,
      name?: string | null,
      phone?: string | null,
      text?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDatasByChapterQueryVariables = {
  chapterId: string,
  filter?: ModelUserDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDatasByChapterQuery = {
  listDatasByChapter?:  {
    __typename: "ModelUserDataConnection",
    items:  Array< {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDatasByChapterAndUserQueryVariables = {
  chapterId: string,
  filter?: ModelUserDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId?: ModelIDKeyConditionInput | null,
};

export type ListDatasByChapterAndUserQuery = {
  listDatasByChapterAndUser?:  {
    __typename: "ModelUserDataConnection",
    items:  Array< {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDatasByLevelQueryVariables = {
  filter?: ModelUserDataFilterInput | null,
  levelId: string,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDatasByLevelQuery = {
  listDatasByLevel?:  {
    __typename: "ModelUserDataConnection",
    items:  Array< {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDatasByLevelAndUserQueryVariables = {
  filter?: ModelUserDataFilterInput | null,
  levelId: string,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId?: ModelIDKeyConditionInput | null,
};

export type ListDatasByLevelAndUserQuery = {
  listDatasByLevelAndUser?:  {
    __typename: "ModelUserDataConnection",
    items:  Array< {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDatasByProgramQueryVariables = {
  filter?: ModelUserDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  programId: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListDatasByProgramQuery = {
  listDatasByProgram?:  {
    __typename: "ModelUserDataConnection",
    items:  Array< {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDatasByProgramAndUserQueryVariables = {
  filter?: ModelUserDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  programId: string,
  sortDirection?: ModelSortDirection | null,
  userId?: ModelIDKeyConditionInput | null,
};

export type ListDatasByProgramAndUserQuery = {
  listDatasByProgramAndUser?:  {
    __typename: "ModelUserDataConnection",
    items:  Array< {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDatasByQuestionQueryVariables = {
  filter?: ModelUserDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  questionId: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListDatasByQuestionQuery = {
  listDatasByQuestion?:  {
    __typename: "ModelUserDataConnection",
    items:  Array< {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDatasByQuestionAndUserQueryVariables = {
  filter?: ModelUserDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  questionId: string,
  sortDirection?: ModelSortDirection | null,
  userId?: ModelIDKeyConditionInput | null,
};

export type ListDatasByQuestionAndUserQuery = {
  listDatasByQuestionAndUser?:  {
    __typename: "ModelUserDataConnection",
    items:  Array< {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDatasByUserQueryVariables = {
  filter?: ModelUserDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId: string,
};

export type ListDatasByUserQuery = {
  listDatasByUser?:  {
    __typename: "ModelUserDataConnection",
    items:  Array< {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  itemId?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      animation?: string | null,
      animationName?: string | null,
      audioData?: string | null,
      autoplay?: boolean | null,
      createdAt: string,
      isAudioClick?: boolean | null,
      isAudioHoover?: boolean | null,
      isAudioPlay?: boolean | null,
      itemCondition?: Array< string | null > | null,
      itemId: string,
      itemNumber?: number | null,
      itemPosition?: Array< string | null > | null,
      itemSize?: Array< string | null > | null,
      itemType?: string | null,
      loop?: boolean | null,
      questionId: string,
      questionNumber?: number | null,
      segments?: Array< number | null > | null,
      step?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListItemsByQuestionIdQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  questionId: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListItemsByQuestionIdQuery = {
  listItemsByQuestionId?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      animation?: string | null,
      animationName?: string | null,
      audioData?: string | null,
      autoplay?: boolean | null,
      createdAt: string,
      isAudioClick?: boolean | null,
      isAudioHoover?: boolean | null,
      isAudioPlay?: boolean | null,
      itemCondition?: Array< string | null > | null,
      itemId: string,
      itemNumber?: number | null,
      itemPosition?: Array< string | null > | null,
      itemSize?: Array< string | null > | null,
      itemType?: string | null,
      loop?: boolean | null,
      questionId: string,
      questionNumber?: number | null,
      segments?: Array< number | null > | null,
      step?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLevelsQueryVariables = {
  filter?: ModelLevelFilterInput | null,
  levelId?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLevelsQuery = {
  listLevels?:  {
    __typename: "ModelLevelConnection",
    items:  Array< {
      __typename: "Level",
      createdAt: string,
      levelAnimation?: string | null,
      levelAnimationName?: string | null,
      levelDescription?: string | null,
      levelId: string,
      levelName?: string | null,
      levelNumber?: number | null,
      levelSubject?: string | null,
      programName?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLevelsByProgramNameQueryVariables = {
  filter?: ModelLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  programName: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListLevelsByProgramNameQuery = {
  listLevelsByProgramName?:  {
    __typename: "ModelLevelConnection",
    items:  Array< {
      __typename: "Level",
      createdAt: string,
      levelAnimation?: string | null,
      levelAnimationName?: string | null,
      levelDescription?: string | null,
      levelId: string,
      levelName?: string | null,
      levelNumber?: number | null,
      levelSubject?: string | null,
      programName?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  orderId?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      billingDetails?: string | null,
      createdAt: string,
      isDelivered?: boolean | null,
      isPaid?: boolean | null,
      orderId: string,
      refNumber?: string | null,
      totalGoldCoins?: number | null,
      totalPrice?: number | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrdersByUserIdQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId: string,
};

export type ListOrdersByUserIdQuery = {
  listOrdersByUserId?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      billingDetails?: string | null,
      createdAt: string,
      isDelivered?: boolean | null,
      isPaid?: boolean | null,
      orderId: string,
      refNumber?: string | null,
      totalGoldCoins?: number | null,
      totalPrice?: number | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrdersByUserRefNumberQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  refNumber: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListOrdersByUserRefNumberQuery = {
  listOrdersByUserRefNumber?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      billingDetails?: string | null,
      createdAt: string,
      isDelivered?: boolean | null,
      isPaid?: boolean | null,
      orderId: string,
      refNumber?: string | null,
      totalGoldCoins?: number | null,
      totalPrice?: number | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProgramsQueryVariables = {
  filter?: ModelProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  programId?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProgramsQuery = {
  listPrograms?:  {
    __typename: "ModelProgramConnection",
    items:  Array< {
      __typename: "Program",
      createdAt: string,
      programAnimation?: string | null,
      programAnimationName?: string | null,
      programDescription?: string | null,
      programId: string,
      programName?: string | null,
      programNumber?: number | null,
      programSubject?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  questionId?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListQuestionsByChapterNumberQueryVariables = {
  chapterNumber: number,
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListQuestionsByChapterNumberQuery = {
  listQuestionsByChapterNumber?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRecommendationByUserIdQueryVariables = {
  filter?: ModelRecommendationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId: string,
};

export type ListRecommendationByUserIdQuery = {
  listRecommendationByUserId?:  {
    __typename: "ModelRecommendationConnection",
    items:  Array< {
      __typename: "Recommendation",
      createdAt?: number | null,
      name?: string | null,
      rating?: number | null,
      recommendationId: string,
      text?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRecommendationsQueryVariables = {
  filter?: ModelRecommendationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  recommendationId?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRecommendationsQuery = {
  listRecommendations?:  {
    __typename: "ModelRecommendationConnection",
    items:  Array< {
      __typename: "Recommendation",
      createdAt?: number | null,
      name?: string | null,
      rating?: number | null,
      recommendationId: string,
      text?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListReportDataQueryVariables = {
  filter?: ModelReportDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportDataQuery = {
  listReportData?:  {
    __typename: "ModelReportDataConnection",
    items:  Array< {
      __typename: "ReportData",
      createdAt: string,
      id: string,
      reportId: string,
      updatedAt: string,
      userDataId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListReportsQueryVariables = {
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  reportId?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListReportsQuery = {
  listReports?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      createdAt: string,
      reportData?: string | null,
      reportId: string,
      reportRef?: string | null,
      reportType?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserDataQueryVariables = {
  filter?: ModelUserDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userDataId?: string | null,
};

export type ListUserDataQuery = {
  listUserData?:  {
    __typename: "ModelUserDataConnection",
    items:  Array< {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProgramsQueryVariables = {
  filter?: ModelUserProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userProgramId?: string | null,
};

export type ListUserProgramsQuery = {
  listUserPrograms?:  {
    __typename: "ModelUserProgramConnection",
    items:  Array< {
      __typename: "UserProgram",
      createdAt: string,
      currentStatus?: string | null,
      email?: string | null,
      expiredAt?: number | null,
      isOpen?: boolean | null,
      nextQuestion?: string | null,
      programName?: string | null,
      treasure?: number | null,
      updatedAt: string,
      userProgramId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserProgramByEmailQueryVariables = {
  email: string,
  filter?: ModelUserProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type UserProgramByEmailQuery = {
  userProgramByEmail?:  {
    __typename: "ModelUserProgramConnection",
    items:  Array< {
      __typename: "UserProgram",
      createdAt: string,
      currentStatus?: string | null,
      email?: string | null,
      expiredAt?: number | null,
      isOpen?: boolean | null,
      nextQuestion?: string | null,
      programName?: string | null,
      treasure?: number | null,
      updatedAt: string,
      userProgramId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserProgramByEmailAndProgramNameQueryVariables = {
  email: string,
  filter?: ModelUserProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  programName?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
};

export type UserProgramByEmailAndProgramNameQuery = {
  userProgramByEmailAndProgramName?:  {
    __typename: "ModelUserProgramConnection",
    items:  Array< {
      __typename: "UserProgram",
      createdAt: string,
      currentStatus?: string | null,
      email?: string | null,
      expiredAt?: number | null,
      isOpen?: boolean | null,
      nextQuestion?: string | null,
      programName?: string | null,
      treasure?: number | null,
      updatedAt: string,
      userProgramId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateAdressMutationVariables = {
  condition?: ModelAdressConditionInput | null,
  input: CreateAdressInput,
};

export type CreateAdressMutation = {
  createAdress?:  {
    __typename: "Adress",
    appartment?: string | null,
    city?: string | null,
    createdAt: string,
    house?: string | null,
    street?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId: string,
    zipcode?: string | null,
  } | null,
};

export type CreateChapterMutationVariables = {
  condition?: ModelChapterConditionInput | null,
  input: CreateChapterInput,
};

export type CreateChapterMutation = {
  createChapter?:  {
    __typename: "Chapter",
    bundleNumber?: Array< number | null > | null,
    chapterAnimation?: string | null,
    chapterAnimationName?: string | null,
    chapterDescription?: string | null,
    chapterId: string,
    chapterName?: string | null,
    chapterNumber?: number | null,
    chapterSubject?: string | null,
    conditionsList?: string | null,
    createdAt: string,
    level?:  {
      __typename: "Level",
      createdAt: string,
      levelAnimation?: string | null,
      levelAnimationName?: string | null,
      levelDescription?: string | null,
      levelId: string,
      levelName?: string | null,
      levelNumber?: number | null,
      levelSubject?: string | null,
      programName?: string | null,
      updatedAt: string,
    } | null,
    levelId?: string | null,
    levelNumber?: number | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateContactMutationVariables = {
  condition?: ModelContactConditionInput | null,
  input: CreateContactInput,
};

export type CreateContactMutation = {
  createContact?:  {
    __typename: "Contact",
    contactId: string,
    createdAt?: number | null,
    email?: string | null,
    isAnswered?: boolean | null,
    name?: string | null,
    phone?: string | null,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type CreateItemMutationVariables = {
  condition?: ModelItemConditionInput | null,
  input: CreateItemInput,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    animation?: string | null,
    animationName?: string | null,
    audioData?: string | null,
    autoplay?: boolean | null,
    createdAt: string,
    isAudioClick?: boolean | null,
    isAudioHoover?: boolean | null,
    isAudioPlay?: boolean | null,
    itemCondition?: Array< string | null > | null,
    itemId: string,
    itemNumber?: number | null,
    itemPosition?: Array< string | null > | null,
    itemSize?: Array< string | null > | null,
    itemType?: string | null,
    loop?: boolean | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId: string,
    questionNumber?: number | null,
    segments?: Array< number | null > | null,
    step?: number | null,
    updatedAt: string,
  } | null,
};

export type CreateLevelMutationVariables = {
  condition?: ModelLevelConditionInput | null,
  input: CreateLevelInput,
};

export type CreateLevelMutation = {
  createLevel?:  {
    __typename: "Level",
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    levelAnimation?: string | null,
    levelAnimationName?: string | null,
    levelDescription?: string | null,
    levelId: string,
    levelName?: string | null,
    levelNumber?: number | null,
    levelSubject?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      programAnimation?: string | null,
      programAnimationName?: string | null,
      programDescription?: string | null,
      programId: string,
      programName?: string | null,
      programNumber?: number | null,
      programSubject?: string | null,
      updatedAt: string,
    } | null,
    programName?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  condition?: ModelOrderConditionInput | null,
  input: CreateOrderInput,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    billingDetails?: string | null,
    createdAt: string,
    isDelivered?: boolean | null,
    isPaid?: boolean | null,
    orderId: string,
    refNumber?: string | null,
    totalGoldCoins?: number | null,
    totalPrice?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type CreateProgramMutationVariables = {
  condition?: ModelProgramConditionInput | null,
  input: CreateProgramInput,
};

export type CreateProgramMutation = {
  createProgram?:  {
    __typename: "Program",
    createdAt: string,
    levels?:  {
      __typename: "ModelLevelConnection",
      nextToken?: string | null,
    } | null,
    programAnimation?: string | null,
    programAnimationName?: string | null,
    programDescription?: string | null,
    programId: string,
    programName?: string | null,
    programNumber?: number | null,
    programSubject?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateQuestionMutationVariables = {
  condition?: ModelQuestionConditionInput | null,
  input: CreateQuestionInput,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    chapter?:  {
      __typename: "Chapter",
      bundleNumber?: Array< number | null > | null,
      chapterAnimation?: string | null,
      chapterAnimationName?: string | null,
      chapterDescription?: string | null,
      chapterId: string,
      chapterName?: string | null,
      chapterNumber?: number | null,
      chapterSubject?: string | null,
      conditionsList?: string | null,
      createdAt: string,
      levelId?: string | null,
      levelNumber?: number | null,
      updatedAt: string,
    } | null,
    chapterId?: string | null,
    chapterNumber?: number | null,
    createdAt: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    permutationList?: string | null,
    questionAnimation?: string | null,
    questionAnimationName?: string | null,
    questionDescription?: string | null,
    questionId: string,
    questionName?: string | null,
    questionNumber?: number | null,
    questionSubject?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateRecommendationMutationVariables = {
  condition?: ModelRecommendationConditionInput | null,
  input: CreateRecommendationInput,
};

export type CreateRecommendationMutation = {
  createRecommendation?:  {
    __typename: "Recommendation",
    createdAt?: number | null,
    name?: string | null,
    rating?: number | null,
    recommendationId: string,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type CreateReportMutationVariables = {
  condition?: ModelReportConditionInput | null,
  input: CreateReportInput,
};

export type CreateReportMutation = {
  createReport?:  {
    __typename: "Report",
    createdAt: string,
    reportData?: string | null,
    reportId: string,
    reportRef?: string | null,
    reportType?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateReportDataMutationVariables = {
  condition?: ModelReportDataConditionInput | null,
  input: CreateReportDataInput,
};

export type CreateReportDataMutation = {
  createReportData?:  {
    __typename: "ReportData",
    createdAt: string,
    id: string,
    report?:  {
      __typename: "Report",
      createdAt: string,
      reportData?: string | null,
      reportId: string,
      reportRef?: string | null,
      reportType?: string | null,
      updatedAt: string,
    } | null,
    reportId: string,
    updatedAt: string,
    userData?:  {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null,
    userDataId: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    adress?:  {
      __typename: "Adress",
      appartment?: string | null,
      city?: string | null,
      createdAt: string,
      house?: string | null,
      street?: string | null,
      updatedAt: string,
      userId: string,
      zipcode?: string | null,
    } | null,
    cards?: Array< string | null > | null,
    cognitoUserName?: string | null,
    computerIP?: string | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    isAdmin?: boolean | null,
    name?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    picture?: string | null,
    recommendations?:  {
      __typename: "ModelRecommendationConnection",
      nextToken?: string | null,
    } | null,
    sessionStart?: number | null,
    surname?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
    userId: string,
    userPrograms?: Array< string | null > | null,
  } | null,
};

export type CreateUserDataMutationVariables = {
  condition?: ModelUserDataConditionInput | null,
  input: CreateUserDataInput,
};

export type CreateUserDataMutation = {
  createUserData?:  {
    __typename: "UserData",
    answer?: string | null,
    chapterId?: string | null,
    createdAt?: number | null,
    currentPermutation?: string | null,
    levelId?: string | null,
    nextQuestion?: string | null,
    precent?: number | null,
    programId?: string | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId?: string | null,
    reports?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userDataId: string,
    userId?: string | null,
    userStatus?: string | null,
  } | null,
};

export type CreateUserProgramMutationVariables = {
  condition?: ModelUserProgramConditionInput | null,
  input: CreateUserProgramInput,
};

export type CreateUserProgramMutation = {
  createUserProgram?:  {
    __typename: "UserProgram",
    createdAt: string,
    currentStatus?: string | null,
    email?: string | null,
    expiredAt?: number | null,
    isOpen?: boolean | null,
    nextQuestion?: string | null,
    programName?: string | null,
    treasure?: number | null,
    updatedAt: string,
    userProgramId: string,
  } | null,
};

export type DeleteAdressMutationVariables = {
  condition?: ModelAdressConditionInput | null,
  input: DeleteAdressInput,
};

export type DeleteAdressMutation = {
  deleteAdress?:  {
    __typename: "Adress",
    appartment?: string | null,
    city?: string | null,
    createdAt: string,
    house?: string | null,
    street?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId: string,
    zipcode?: string | null,
  } | null,
};

export type DeleteChapterMutationVariables = {
  condition?: ModelChapterConditionInput | null,
  input: DeleteChapterInput,
};

export type DeleteChapterMutation = {
  deleteChapter?:  {
    __typename: "Chapter",
    bundleNumber?: Array< number | null > | null,
    chapterAnimation?: string | null,
    chapterAnimationName?: string | null,
    chapterDescription?: string | null,
    chapterId: string,
    chapterName?: string | null,
    chapterNumber?: number | null,
    chapterSubject?: string | null,
    conditionsList?: string | null,
    createdAt: string,
    level?:  {
      __typename: "Level",
      createdAt: string,
      levelAnimation?: string | null,
      levelAnimationName?: string | null,
      levelDescription?: string | null,
      levelId: string,
      levelName?: string | null,
      levelNumber?: number | null,
      levelSubject?: string | null,
      programName?: string | null,
      updatedAt: string,
    } | null,
    levelId?: string | null,
    levelNumber?: number | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteContactMutationVariables = {
  condition?: ModelContactConditionInput | null,
  input: DeleteContactInput,
};

export type DeleteContactMutation = {
  deleteContact?:  {
    __typename: "Contact",
    contactId: string,
    createdAt?: number | null,
    email?: string | null,
    isAnswered?: boolean | null,
    name?: string | null,
    phone?: string | null,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  condition?: ModelItemConditionInput | null,
  input: DeleteItemInput,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    animation?: string | null,
    animationName?: string | null,
    audioData?: string | null,
    autoplay?: boolean | null,
    createdAt: string,
    isAudioClick?: boolean | null,
    isAudioHoover?: boolean | null,
    isAudioPlay?: boolean | null,
    itemCondition?: Array< string | null > | null,
    itemId: string,
    itemNumber?: number | null,
    itemPosition?: Array< string | null > | null,
    itemSize?: Array< string | null > | null,
    itemType?: string | null,
    loop?: boolean | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId: string,
    questionNumber?: number | null,
    segments?: Array< number | null > | null,
    step?: number | null,
    updatedAt: string,
  } | null,
};

export type DeleteLevelMutationVariables = {
  condition?: ModelLevelConditionInput | null,
  input: DeleteLevelInput,
};

export type DeleteLevelMutation = {
  deleteLevel?:  {
    __typename: "Level",
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    levelAnimation?: string | null,
    levelAnimationName?: string | null,
    levelDescription?: string | null,
    levelId: string,
    levelName?: string | null,
    levelNumber?: number | null,
    levelSubject?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      programAnimation?: string | null,
      programAnimationName?: string | null,
      programDescription?: string | null,
      programId: string,
      programName?: string | null,
      programNumber?: number | null,
      programSubject?: string | null,
      updatedAt: string,
    } | null,
    programName?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  condition?: ModelOrderConditionInput | null,
  input: DeleteOrderInput,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    billingDetails?: string | null,
    createdAt: string,
    isDelivered?: boolean | null,
    isPaid?: boolean | null,
    orderId: string,
    refNumber?: string | null,
    totalGoldCoins?: number | null,
    totalPrice?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type DeleteProgramMutationVariables = {
  condition?: ModelProgramConditionInput | null,
  input: DeleteProgramInput,
};

export type DeleteProgramMutation = {
  deleteProgram?:  {
    __typename: "Program",
    createdAt: string,
    levels?:  {
      __typename: "ModelLevelConnection",
      nextToken?: string | null,
    } | null,
    programAnimation?: string | null,
    programAnimationName?: string | null,
    programDescription?: string | null,
    programId: string,
    programName?: string | null,
    programNumber?: number | null,
    programSubject?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  condition?: ModelQuestionConditionInput | null,
  input: DeleteQuestionInput,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    chapter?:  {
      __typename: "Chapter",
      bundleNumber?: Array< number | null > | null,
      chapterAnimation?: string | null,
      chapterAnimationName?: string | null,
      chapterDescription?: string | null,
      chapterId: string,
      chapterName?: string | null,
      chapterNumber?: number | null,
      chapterSubject?: string | null,
      conditionsList?: string | null,
      createdAt: string,
      levelId?: string | null,
      levelNumber?: number | null,
      updatedAt: string,
    } | null,
    chapterId?: string | null,
    chapterNumber?: number | null,
    createdAt: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    permutationList?: string | null,
    questionAnimation?: string | null,
    questionAnimationName?: string | null,
    questionDescription?: string | null,
    questionId: string,
    questionName?: string | null,
    questionNumber?: number | null,
    questionSubject?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteRecommendationMutationVariables = {
  condition?: ModelRecommendationConditionInput | null,
  input: DeleteRecommendationInput,
};

export type DeleteRecommendationMutation = {
  deleteRecommendation?:  {
    __typename: "Recommendation",
    createdAt?: number | null,
    name?: string | null,
    rating?: number | null,
    recommendationId: string,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type DeleteReportMutationVariables = {
  condition?: ModelReportConditionInput | null,
  input: DeleteReportInput,
};

export type DeleteReportMutation = {
  deleteReport?:  {
    __typename: "Report",
    createdAt: string,
    reportData?: string | null,
    reportId: string,
    reportRef?: string | null,
    reportType?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteReportDataMutationVariables = {
  condition?: ModelReportDataConditionInput | null,
  input: DeleteReportDataInput,
};

export type DeleteReportDataMutation = {
  deleteReportData?:  {
    __typename: "ReportData",
    createdAt: string,
    id: string,
    report?:  {
      __typename: "Report",
      createdAt: string,
      reportData?: string | null,
      reportId: string,
      reportRef?: string | null,
      reportType?: string | null,
      updatedAt: string,
    } | null,
    reportId: string,
    updatedAt: string,
    userData?:  {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null,
    userDataId: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    adress?:  {
      __typename: "Adress",
      appartment?: string | null,
      city?: string | null,
      createdAt: string,
      house?: string | null,
      street?: string | null,
      updatedAt: string,
      userId: string,
      zipcode?: string | null,
    } | null,
    cards?: Array< string | null > | null,
    cognitoUserName?: string | null,
    computerIP?: string | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    isAdmin?: boolean | null,
    name?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    picture?: string | null,
    recommendations?:  {
      __typename: "ModelRecommendationConnection",
      nextToken?: string | null,
    } | null,
    sessionStart?: number | null,
    surname?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
    userId: string,
    userPrograms?: Array< string | null > | null,
  } | null,
};

export type DeleteUserDataMutationVariables = {
  condition?: ModelUserDataConditionInput | null,
  input: DeleteUserDataInput,
};

export type DeleteUserDataMutation = {
  deleteUserData?:  {
    __typename: "UserData",
    answer?: string | null,
    chapterId?: string | null,
    createdAt?: number | null,
    currentPermutation?: string | null,
    levelId?: string | null,
    nextQuestion?: string | null,
    precent?: number | null,
    programId?: string | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId?: string | null,
    reports?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userDataId: string,
    userId?: string | null,
    userStatus?: string | null,
  } | null,
};

export type DeleteUserProgramMutationVariables = {
  condition?: ModelUserProgramConditionInput | null,
  input: DeleteUserProgramInput,
};

export type DeleteUserProgramMutation = {
  deleteUserProgram?:  {
    __typename: "UserProgram",
    createdAt: string,
    currentStatus?: string | null,
    email?: string | null,
    expiredAt?: number | null,
    isOpen?: boolean | null,
    nextQuestion?: string | null,
    programName?: string | null,
    treasure?: number | null,
    updatedAt: string,
    userProgramId: string,
  } | null,
};

export type UpdateAdressMutationVariables = {
  condition?: ModelAdressConditionInput | null,
  input: UpdateAdressInput,
};

export type UpdateAdressMutation = {
  updateAdress?:  {
    __typename: "Adress",
    appartment?: string | null,
    city?: string | null,
    createdAt: string,
    house?: string | null,
    street?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId: string,
    zipcode?: string | null,
  } | null,
};

export type UpdateChapterMutationVariables = {
  condition?: ModelChapterConditionInput | null,
  input: UpdateChapterInput,
};

export type UpdateChapterMutation = {
  updateChapter?:  {
    __typename: "Chapter",
    bundleNumber?: Array< number | null > | null,
    chapterAnimation?: string | null,
    chapterAnimationName?: string | null,
    chapterDescription?: string | null,
    chapterId: string,
    chapterName?: string | null,
    chapterNumber?: number | null,
    chapterSubject?: string | null,
    conditionsList?: string | null,
    createdAt: string,
    level?:  {
      __typename: "Level",
      createdAt: string,
      levelAnimation?: string | null,
      levelAnimationName?: string | null,
      levelDescription?: string | null,
      levelId: string,
      levelName?: string | null,
      levelNumber?: number | null,
      levelSubject?: string | null,
      programName?: string | null,
      updatedAt: string,
    } | null,
    levelId?: string | null,
    levelNumber?: number | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateContactMutationVariables = {
  condition?: ModelContactConditionInput | null,
  input: UpdateContactInput,
};

export type UpdateContactMutation = {
  updateContact?:  {
    __typename: "Contact",
    contactId: string,
    createdAt?: number | null,
    email?: string | null,
    isAnswered?: boolean | null,
    name?: string | null,
    phone?: string | null,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  condition?: ModelItemConditionInput | null,
  input: UpdateItemInput,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    animation?: string | null,
    animationName?: string | null,
    audioData?: string | null,
    autoplay?: boolean | null,
    createdAt: string,
    isAudioClick?: boolean | null,
    isAudioHoover?: boolean | null,
    isAudioPlay?: boolean | null,
    itemCondition?: Array< string | null > | null,
    itemId: string,
    itemNumber?: number | null,
    itemPosition?: Array< string | null > | null,
    itemSize?: Array< string | null > | null,
    itemType?: string | null,
    loop?: boolean | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId: string,
    questionNumber?: number | null,
    segments?: Array< number | null > | null,
    step?: number | null,
    updatedAt: string,
  } | null,
};

export type UpdateLevelMutationVariables = {
  condition?: ModelLevelConditionInput | null,
  input: UpdateLevelInput,
};

export type UpdateLevelMutation = {
  updateLevel?:  {
    __typename: "Level",
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    levelAnimation?: string | null,
    levelAnimationName?: string | null,
    levelDescription?: string | null,
    levelId: string,
    levelName?: string | null,
    levelNumber?: number | null,
    levelSubject?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      programAnimation?: string | null,
      programAnimationName?: string | null,
      programDescription?: string | null,
      programId: string,
      programName?: string | null,
      programNumber?: number | null,
      programSubject?: string | null,
      updatedAt: string,
    } | null,
    programName?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  condition?: ModelOrderConditionInput | null,
  input: UpdateOrderInput,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    billingDetails?: string | null,
    createdAt: string,
    isDelivered?: boolean | null,
    isPaid?: boolean | null,
    orderId: string,
    refNumber?: string | null,
    totalGoldCoins?: number | null,
    totalPrice?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type UpdateProgramMutationVariables = {
  condition?: ModelProgramConditionInput | null,
  input: UpdateProgramInput,
};

export type UpdateProgramMutation = {
  updateProgram?:  {
    __typename: "Program",
    createdAt: string,
    levels?:  {
      __typename: "ModelLevelConnection",
      nextToken?: string | null,
    } | null,
    programAnimation?: string | null,
    programAnimationName?: string | null,
    programDescription?: string | null,
    programId: string,
    programName?: string | null,
    programNumber?: number | null,
    programSubject?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  condition?: ModelQuestionConditionInput | null,
  input: UpdateQuestionInput,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    chapter?:  {
      __typename: "Chapter",
      bundleNumber?: Array< number | null > | null,
      chapterAnimation?: string | null,
      chapterAnimationName?: string | null,
      chapterDescription?: string | null,
      chapterId: string,
      chapterName?: string | null,
      chapterNumber?: number | null,
      chapterSubject?: string | null,
      conditionsList?: string | null,
      createdAt: string,
      levelId?: string | null,
      levelNumber?: number | null,
      updatedAt: string,
    } | null,
    chapterId?: string | null,
    chapterNumber?: number | null,
    createdAt: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    permutationList?: string | null,
    questionAnimation?: string | null,
    questionAnimationName?: string | null,
    questionDescription?: string | null,
    questionId: string,
    questionName?: string | null,
    questionNumber?: number | null,
    questionSubject?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateRecommendationMutationVariables = {
  condition?: ModelRecommendationConditionInput | null,
  input: UpdateRecommendationInput,
};

export type UpdateRecommendationMutation = {
  updateRecommendation?:  {
    __typename: "Recommendation",
    createdAt?: number | null,
    name?: string | null,
    rating?: number | null,
    recommendationId: string,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type UpdateReportMutationVariables = {
  condition?: ModelReportConditionInput | null,
  input: UpdateReportInput,
};

export type UpdateReportMutation = {
  updateReport?:  {
    __typename: "Report",
    createdAt: string,
    reportData?: string | null,
    reportId: string,
    reportRef?: string | null,
    reportType?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateReportDataMutationVariables = {
  condition?: ModelReportDataConditionInput | null,
  input: UpdateReportDataInput,
};

export type UpdateReportDataMutation = {
  updateReportData?:  {
    __typename: "ReportData",
    createdAt: string,
    id: string,
    report?:  {
      __typename: "Report",
      createdAt: string,
      reportData?: string | null,
      reportId: string,
      reportRef?: string | null,
      reportType?: string | null,
      updatedAt: string,
    } | null,
    reportId: string,
    updatedAt: string,
    userData?:  {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null,
    userDataId: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    adress?:  {
      __typename: "Adress",
      appartment?: string | null,
      city?: string | null,
      createdAt: string,
      house?: string | null,
      street?: string | null,
      updatedAt: string,
      userId: string,
      zipcode?: string | null,
    } | null,
    cards?: Array< string | null > | null,
    cognitoUserName?: string | null,
    computerIP?: string | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    isAdmin?: boolean | null,
    name?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    picture?: string | null,
    recommendations?:  {
      __typename: "ModelRecommendationConnection",
      nextToken?: string | null,
    } | null,
    sessionStart?: number | null,
    surname?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
    userId: string,
    userPrograms?: Array< string | null > | null,
  } | null,
};

export type UpdateUserDataMutationVariables = {
  condition?: ModelUserDataConditionInput | null,
  input: UpdateUserDataInput,
};

export type UpdateUserDataMutation = {
  updateUserData?:  {
    __typename: "UserData",
    answer?: string | null,
    chapterId?: string | null,
    createdAt?: number | null,
    currentPermutation?: string | null,
    levelId?: string | null,
    nextQuestion?: string | null,
    precent?: number | null,
    programId?: string | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId?: string | null,
    reports?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userDataId: string,
    userId?: string | null,
    userStatus?: string | null,
  } | null,
};

export type UpdateUserProgramMutationVariables = {
  condition?: ModelUserProgramConditionInput | null,
  input: UpdateUserProgramInput,
};

export type UpdateUserProgramMutation = {
  updateUserProgram?:  {
    __typename: "UserProgram",
    createdAt: string,
    currentStatus?: string | null,
    email?: string | null,
    expiredAt?: number | null,
    isOpen?: boolean | null,
    nextQuestion?: string | null,
    programName?: string | null,
    treasure?: number | null,
    updatedAt: string,
    userProgramId: string,
  } | null,
};

export type OnCreateAdressSubscriptionVariables = {
  filter?: ModelSubscriptionAdressFilterInput | null,
};

export type OnCreateAdressSubscription = {
  onCreateAdress?:  {
    __typename: "Adress",
    appartment?: string | null,
    city?: string | null,
    createdAt: string,
    house?: string | null,
    street?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId: string,
    zipcode?: string | null,
  } | null,
};

export type OnCreateChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
};

export type OnCreateChapterSubscription = {
  onCreateChapter?:  {
    __typename: "Chapter",
    bundleNumber?: Array< number | null > | null,
    chapterAnimation?: string | null,
    chapterAnimationName?: string | null,
    chapterDescription?: string | null,
    chapterId: string,
    chapterName?: string | null,
    chapterNumber?: number | null,
    chapterSubject?: string | null,
    conditionsList?: string | null,
    createdAt: string,
    level?:  {
      __typename: "Level",
      createdAt: string,
      levelAnimation?: string | null,
      levelAnimationName?: string | null,
      levelDescription?: string | null,
      levelId: string,
      levelName?: string | null,
      levelNumber?: number | null,
      levelSubject?: string | null,
      programName?: string | null,
      updatedAt: string,
    } | null,
    levelId?: string | null,
    levelNumber?: number | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
};

export type OnCreateContactSubscription = {
  onCreateContact?:  {
    __typename: "Contact",
    contactId: string,
    createdAt?: number | null,
    email?: string | null,
    isAnswered?: boolean | null,
    name?: string | null,
    phone?: string | null,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    animation?: string | null,
    animationName?: string | null,
    audioData?: string | null,
    autoplay?: boolean | null,
    createdAt: string,
    isAudioClick?: boolean | null,
    isAudioHoover?: boolean | null,
    isAudioPlay?: boolean | null,
    itemCondition?: Array< string | null > | null,
    itemId: string,
    itemNumber?: number | null,
    itemPosition?: Array< string | null > | null,
    itemSize?: Array< string | null > | null,
    itemType?: string | null,
    loop?: boolean | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId: string,
    questionNumber?: number | null,
    segments?: Array< number | null > | null,
    step?: number | null,
    updatedAt: string,
  } | null,
};

export type OnCreateLevelSubscriptionVariables = {
  filter?: ModelSubscriptionLevelFilterInput | null,
};

export type OnCreateLevelSubscription = {
  onCreateLevel?:  {
    __typename: "Level",
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    levelAnimation?: string | null,
    levelAnimationName?: string | null,
    levelDescription?: string | null,
    levelId: string,
    levelName?: string | null,
    levelNumber?: number | null,
    levelSubject?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      programAnimation?: string | null,
      programAnimationName?: string | null,
      programDescription?: string | null,
      programId: string,
      programName?: string | null,
      programNumber?: number | null,
      programSubject?: string | null,
      updatedAt: string,
    } | null,
    programName?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    billingDetails?: string | null,
    createdAt: string,
    isDelivered?: boolean | null,
    isPaid?: boolean | null,
    orderId: string,
    refNumber?: string | null,
    totalGoldCoins?: number | null,
    totalPrice?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnCreateProgramSubscriptionVariables = {
  filter?: ModelSubscriptionProgramFilterInput | null,
};

export type OnCreateProgramSubscription = {
  onCreateProgram?:  {
    __typename: "Program",
    createdAt: string,
    levels?:  {
      __typename: "ModelLevelConnection",
      nextToken?: string | null,
    } | null,
    programAnimation?: string | null,
    programAnimationName?: string | null,
    programDescription?: string | null,
    programId: string,
    programName?: string | null,
    programNumber?: number | null,
    programSubject?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    chapter?:  {
      __typename: "Chapter",
      bundleNumber?: Array< number | null > | null,
      chapterAnimation?: string | null,
      chapterAnimationName?: string | null,
      chapterDescription?: string | null,
      chapterId: string,
      chapterName?: string | null,
      chapterNumber?: number | null,
      chapterSubject?: string | null,
      conditionsList?: string | null,
      createdAt: string,
      levelId?: string | null,
      levelNumber?: number | null,
      updatedAt: string,
    } | null,
    chapterId?: string | null,
    chapterNumber?: number | null,
    createdAt: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    permutationList?: string | null,
    questionAnimation?: string | null,
    questionAnimationName?: string | null,
    questionDescription?: string | null,
    questionId: string,
    questionName?: string | null,
    questionNumber?: number | null,
    questionSubject?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateRecommendationSubscriptionVariables = {
  filter?: ModelSubscriptionRecommendationFilterInput | null,
};

export type OnCreateRecommendationSubscription = {
  onCreateRecommendation?:  {
    __typename: "Recommendation",
    createdAt?: number | null,
    name?: string | null,
    rating?: number | null,
    recommendationId: string,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnCreateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnCreateReportSubscription = {
  onCreateReport?:  {
    __typename: "Report",
    createdAt: string,
    reportData?: string | null,
    reportId: string,
    reportRef?: string | null,
    reportType?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateReportDataSubscriptionVariables = {
  filter?: ModelSubscriptionReportDataFilterInput | null,
};

export type OnCreateReportDataSubscription = {
  onCreateReportData?:  {
    __typename: "ReportData",
    createdAt: string,
    id: string,
    report?:  {
      __typename: "Report",
      createdAt: string,
      reportData?: string | null,
      reportId: string,
      reportRef?: string | null,
      reportType?: string | null,
      updatedAt: string,
    } | null,
    reportId: string,
    updatedAt: string,
    userData?:  {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null,
    userDataId: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    adress?:  {
      __typename: "Adress",
      appartment?: string | null,
      city?: string | null,
      createdAt: string,
      house?: string | null,
      street?: string | null,
      updatedAt: string,
      userId: string,
      zipcode?: string | null,
    } | null,
    cards?: Array< string | null > | null,
    cognitoUserName?: string | null,
    computerIP?: string | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    isAdmin?: boolean | null,
    name?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    picture?: string | null,
    recommendations?:  {
      __typename: "ModelRecommendationConnection",
      nextToken?: string | null,
    } | null,
    sessionStart?: number | null,
    surname?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
    userId: string,
    userPrograms?: Array< string | null > | null,
  } | null,
};

export type OnCreateUserDataSubscriptionVariables = {
  filter?: ModelSubscriptionUserDataFilterInput | null,
};

export type OnCreateUserDataSubscription = {
  onCreateUserData?:  {
    __typename: "UserData",
    answer?: string | null,
    chapterId?: string | null,
    createdAt?: number | null,
    currentPermutation?: string | null,
    levelId?: string | null,
    nextQuestion?: string | null,
    precent?: number | null,
    programId?: string | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId?: string | null,
    reports?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userDataId: string,
    userId?: string | null,
    userStatus?: string | null,
  } | null,
};

export type OnCreateUserProgramSubscriptionVariables = {
  filter?: ModelSubscriptionUserProgramFilterInput | null,
};

export type OnCreateUserProgramSubscription = {
  onCreateUserProgram?:  {
    __typename: "UserProgram",
    createdAt: string,
    currentStatus?: string | null,
    email?: string | null,
    expiredAt?: number | null,
    isOpen?: boolean | null,
    nextQuestion?: string | null,
    programName?: string | null,
    treasure?: number | null,
    updatedAt: string,
    userProgramId: string,
  } | null,
};

export type OnDeleteAdressSubscriptionVariables = {
  filter?: ModelSubscriptionAdressFilterInput | null,
};

export type OnDeleteAdressSubscription = {
  onDeleteAdress?:  {
    __typename: "Adress",
    appartment?: string | null,
    city?: string | null,
    createdAt: string,
    house?: string | null,
    street?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId: string,
    zipcode?: string | null,
  } | null,
};

export type OnDeleteChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
};

export type OnDeleteChapterSubscription = {
  onDeleteChapter?:  {
    __typename: "Chapter",
    bundleNumber?: Array< number | null > | null,
    chapterAnimation?: string | null,
    chapterAnimationName?: string | null,
    chapterDescription?: string | null,
    chapterId: string,
    chapterName?: string | null,
    chapterNumber?: number | null,
    chapterSubject?: string | null,
    conditionsList?: string | null,
    createdAt: string,
    level?:  {
      __typename: "Level",
      createdAt: string,
      levelAnimation?: string | null,
      levelAnimationName?: string | null,
      levelDescription?: string | null,
      levelId: string,
      levelName?: string | null,
      levelNumber?: number | null,
      levelSubject?: string | null,
      programName?: string | null,
      updatedAt: string,
    } | null,
    levelId?: string | null,
    levelNumber?: number | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
};

export type OnDeleteContactSubscription = {
  onDeleteContact?:  {
    __typename: "Contact",
    contactId: string,
    createdAt?: number | null,
    email?: string | null,
    isAnswered?: boolean | null,
    name?: string | null,
    phone?: string | null,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    animation?: string | null,
    animationName?: string | null,
    audioData?: string | null,
    autoplay?: boolean | null,
    createdAt: string,
    isAudioClick?: boolean | null,
    isAudioHoover?: boolean | null,
    isAudioPlay?: boolean | null,
    itemCondition?: Array< string | null > | null,
    itemId: string,
    itemNumber?: number | null,
    itemPosition?: Array< string | null > | null,
    itemSize?: Array< string | null > | null,
    itemType?: string | null,
    loop?: boolean | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId: string,
    questionNumber?: number | null,
    segments?: Array< number | null > | null,
    step?: number | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteLevelSubscriptionVariables = {
  filter?: ModelSubscriptionLevelFilterInput | null,
};

export type OnDeleteLevelSubscription = {
  onDeleteLevel?:  {
    __typename: "Level",
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    levelAnimation?: string | null,
    levelAnimationName?: string | null,
    levelDescription?: string | null,
    levelId: string,
    levelName?: string | null,
    levelNumber?: number | null,
    levelSubject?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      programAnimation?: string | null,
      programAnimationName?: string | null,
      programDescription?: string | null,
      programId: string,
      programName?: string | null,
      programNumber?: number | null,
      programSubject?: string | null,
      updatedAt: string,
    } | null,
    programName?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    billingDetails?: string | null,
    createdAt: string,
    isDelivered?: boolean | null,
    isPaid?: boolean | null,
    orderId: string,
    refNumber?: string | null,
    totalGoldCoins?: number | null,
    totalPrice?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteProgramSubscriptionVariables = {
  filter?: ModelSubscriptionProgramFilterInput | null,
};

export type OnDeleteProgramSubscription = {
  onDeleteProgram?:  {
    __typename: "Program",
    createdAt: string,
    levels?:  {
      __typename: "ModelLevelConnection",
      nextToken?: string | null,
    } | null,
    programAnimation?: string | null,
    programAnimationName?: string | null,
    programDescription?: string | null,
    programId: string,
    programName?: string | null,
    programNumber?: number | null,
    programSubject?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    chapter?:  {
      __typename: "Chapter",
      bundleNumber?: Array< number | null > | null,
      chapterAnimation?: string | null,
      chapterAnimationName?: string | null,
      chapterDescription?: string | null,
      chapterId: string,
      chapterName?: string | null,
      chapterNumber?: number | null,
      chapterSubject?: string | null,
      conditionsList?: string | null,
      createdAt: string,
      levelId?: string | null,
      levelNumber?: number | null,
      updatedAt: string,
    } | null,
    chapterId?: string | null,
    chapterNumber?: number | null,
    createdAt: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    permutationList?: string | null,
    questionAnimation?: string | null,
    questionAnimationName?: string | null,
    questionDescription?: string | null,
    questionId: string,
    questionName?: string | null,
    questionNumber?: number | null,
    questionSubject?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteRecommendationSubscriptionVariables = {
  filter?: ModelSubscriptionRecommendationFilterInput | null,
};

export type OnDeleteRecommendationSubscription = {
  onDeleteRecommendation?:  {
    __typename: "Recommendation",
    createdAt?: number | null,
    name?: string | null,
    rating?: number | null,
    recommendationId: string,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnDeleteReportSubscription = {
  onDeleteReport?:  {
    __typename: "Report",
    createdAt: string,
    reportData?: string | null,
    reportId: string,
    reportRef?: string | null,
    reportType?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteReportDataSubscriptionVariables = {
  filter?: ModelSubscriptionReportDataFilterInput | null,
};

export type OnDeleteReportDataSubscription = {
  onDeleteReportData?:  {
    __typename: "ReportData",
    createdAt: string,
    id: string,
    report?:  {
      __typename: "Report",
      createdAt: string,
      reportData?: string | null,
      reportId: string,
      reportRef?: string | null,
      reportType?: string | null,
      updatedAt: string,
    } | null,
    reportId: string,
    updatedAt: string,
    userData?:  {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null,
    userDataId: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    adress?:  {
      __typename: "Adress",
      appartment?: string | null,
      city?: string | null,
      createdAt: string,
      house?: string | null,
      street?: string | null,
      updatedAt: string,
      userId: string,
      zipcode?: string | null,
    } | null,
    cards?: Array< string | null > | null,
    cognitoUserName?: string | null,
    computerIP?: string | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    isAdmin?: boolean | null,
    name?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    picture?: string | null,
    recommendations?:  {
      __typename: "ModelRecommendationConnection",
      nextToken?: string | null,
    } | null,
    sessionStart?: number | null,
    surname?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
    userId: string,
    userPrograms?: Array< string | null > | null,
  } | null,
};

export type OnDeleteUserDataSubscriptionVariables = {
  filter?: ModelSubscriptionUserDataFilterInput | null,
};

export type OnDeleteUserDataSubscription = {
  onDeleteUserData?:  {
    __typename: "UserData",
    answer?: string | null,
    chapterId?: string | null,
    createdAt?: number | null,
    currentPermutation?: string | null,
    levelId?: string | null,
    nextQuestion?: string | null,
    precent?: number | null,
    programId?: string | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId?: string | null,
    reports?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userDataId: string,
    userId?: string | null,
    userStatus?: string | null,
  } | null,
};

export type OnDeleteUserProgramSubscriptionVariables = {
  filter?: ModelSubscriptionUserProgramFilterInput | null,
};

export type OnDeleteUserProgramSubscription = {
  onDeleteUserProgram?:  {
    __typename: "UserProgram",
    createdAt: string,
    currentStatus?: string | null,
    email?: string | null,
    expiredAt?: number | null,
    isOpen?: boolean | null,
    nextQuestion?: string | null,
    programName?: string | null,
    treasure?: number | null,
    updatedAt: string,
    userProgramId: string,
  } | null,
};

export type OnUpdateAdressSubscriptionVariables = {
  filter?: ModelSubscriptionAdressFilterInput | null,
};

export type OnUpdateAdressSubscription = {
  onUpdateAdress?:  {
    __typename: "Adress",
    appartment?: string | null,
    city?: string | null,
    createdAt: string,
    house?: string | null,
    street?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId: string,
    zipcode?: string | null,
  } | null,
};

export type OnUpdateChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
};

export type OnUpdateChapterSubscription = {
  onUpdateChapter?:  {
    __typename: "Chapter",
    bundleNumber?: Array< number | null > | null,
    chapterAnimation?: string | null,
    chapterAnimationName?: string | null,
    chapterDescription?: string | null,
    chapterId: string,
    chapterName?: string | null,
    chapterNumber?: number | null,
    chapterSubject?: string | null,
    conditionsList?: string | null,
    createdAt: string,
    level?:  {
      __typename: "Level",
      createdAt: string,
      levelAnimation?: string | null,
      levelAnimationName?: string | null,
      levelDescription?: string | null,
      levelId: string,
      levelName?: string | null,
      levelNumber?: number | null,
      levelSubject?: string | null,
      programName?: string | null,
      updatedAt: string,
    } | null,
    levelId?: string | null,
    levelNumber?: number | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
};

export type OnUpdateContactSubscription = {
  onUpdateContact?:  {
    __typename: "Contact",
    contactId: string,
    createdAt?: number | null,
    email?: string | null,
    isAnswered?: boolean | null,
    name?: string | null,
    phone?: string | null,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    animation?: string | null,
    animationName?: string | null,
    audioData?: string | null,
    autoplay?: boolean | null,
    createdAt: string,
    isAudioClick?: boolean | null,
    isAudioHoover?: boolean | null,
    isAudioPlay?: boolean | null,
    itemCondition?: Array< string | null > | null,
    itemId: string,
    itemNumber?: number | null,
    itemPosition?: Array< string | null > | null,
    itemSize?: Array< string | null > | null,
    itemType?: string | null,
    loop?: boolean | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId: string,
    questionNumber?: number | null,
    segments?: Array< number | null > | null,
    step?: number | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateLevelSubscriptionVariables = {
  filter?: ModelSubscriptionLevelFilterInput | null,
};

export type OnUpdateLevelSubscription = {
  onUpdateLevel?:  {
    __typename: "Level",
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    levelAnimation?: string | null,
    levelAnimationName?: string | null,
    levelDescription?: string | null,
    levelId: string,
    levelName?: string | null,
    levelNumber?: number | null,
    levelSubject?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      programAnimation?: string | null,
      programAnimationName?: string | null,
      programDescription?: string | null,
      programId: string,
      programName?: string | null,
      programNumber?: number | null,
      programSubject?: string | null,
      updatedAt: string,
    } | null,
    programName?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    billingDetails?: string | null,
    createdAt: string,
    isDelivered?: boolean | null,
    isPaid?: boolean | null,
    orderId: string,
    refNumber?: string | null,
    totalGoldCoins?: number | null,
    totalPrice?: number | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateProgramSubscriptionVariables = {
  filter?: ModelSubscriptionProgramFilterInput | null,
};

export type OnUpdateProgramSubscription = {
  onUpdateProgram?:  {
    __typename: "Program",
    createdAt: string,
    levels?:  {
      __typename: "ModelLevelConnection",
      nextToken?: string | null,
    } | null,
    programAnimation?: string | null,
    programAnimationName?: string | null,
    programDescription?: string | null,
    programId: string,
    programName?: string | null,
    programNumber?: number | null,
    programSubject?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    chapter?:  {
      __typename: "Chapter",
      bundleNumber?: Array< number | null > | null,
      chapterAnimation?: string | null,
      chapterAnimationName?: string | null,
      chapterDescription?: string | null,
      chapterId: string,
      chapterName?: string | null,
      chapterNumber?: number | null,
      chapterSubject?: string | null,
      conditionsList?: string | null,
      createdAt: string,
      levelId?: string | null,
      levelNumber?: number | null,
      updatedAt: string,
    } | null,
    chapterId?: string | null,
    chapterNumber?: number | null,
    createdAt: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    permutationList?: string | null,
    questionAnimation?: string | null,
    questionAnimationName?: string | null,
    questionDescription?: string | null,
    questionId: string,
    questionName?: string | null,
    questionNumber?: number | null,
    questionSubject?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateRecommendationSubscriptionVariables = {
  filter?: ModelSubscriptionRecommendationFilterInput | null,
};

export type OnUpdateRecommendationSubscription = {
  onUpdateRecommendation?:  {
    __typename: "Recommendation",
    createdAt?: number | null,
    name?: string | null,
    rating?: number | null,
    recommendationId: string,
    text?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnUpdateReportSubscription = {
  onUpdateReport?:  {
    __typename: "Report",
    createdAt: string,
    reportData?: string | null,
    reportId: string,
    reportRef?: string | null,
    reportType?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateReportDataSubscriptionVariables = {
  filter?: ModelSubscriptionReportDataFilterInput | null,
};

export type OnUpdateReportDataSubscription = {
  onUpdateReportData?:  {
    __typename: "ReportData",
    createdAt: string,
    id: string,
    report?:  {
      __typename: "Report",
      createdAt: string,
      reportData?: string | null,
      reportId: string,
      reportRef?: string | null,
      reportType?: string | null,
      updatedAt: string,
    } | null,
    reportId: string,
    updatedAt: string,
    userData?:  {
      __typename: "UserData",
      answer?: string | null,
      chapterId?: string | null,
      createdAt?: number | null,
      currentPermutation?: string | null,
      levelId?: string | null,
      nextQuestion?: string | null,
      precent?: number | null,
      programId?: string | null,
      questionId?: string | null,
      updatedAt: string,
      userDataId: string,
      userId?: string | null,
      userStatus?: string | null,
    } | null,
    userDataId: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    adress?:  {
      __typename: "Adress",
      appartment?: string | null,
      city?: string | null,
      createdAt: string,
      house?: string | null,
      street?: string | null,
      updatedAt: string,
      userId: string,
      zipcode?: string | null,
    } | null,
    cards?: Array< string | null > | null,
    cognitoUserName?: string | null,
    computerIP?: string | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email?: string | null,
    isAdmin?: boolean | null,
    name?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    phone?: string | null,
    picture?: string | null,
    recommendations?:  {
      __typename: "ModelRecommendationConnection",
      nextToken?: string | null,
    } | null,
    sessionStart?: number | null,
    surname?: string | null,
    updatedAt: string,
    userDatas?:  {
      __typename: "ModelUserDataConnection",
      nextToken?: string | null,
    } | null,
    userId: string,
    userPrograms?: Array< string | null > | null,
  } | null,
};

export type OnUpdateUserDataSubscriptionVariables = {
  filter?: ModelSubscriptionUserDataFilterInput | null,
};

export type OnUpdateUserDataSubscription = {
  onUpdateUserData?:  {
    __typename: "UserData",
    answer?: string | null,
    chapterId?: string | null,
    createdAt?: number | null,
    currentPermutation?: string | null,
    levelId?: string | null,
    nextQuestion?: string | null,
    precent?: number | null,
    programId?: string | null,
    question?:  {
      __typename: "Question",
      chapterId?: string | null,
      chapterNumber?: number | null,
      createdAt: string,
      permutationList?: string | null,
      questionAnimation?: string | null,
      questionAnimationName?: string | null,
      questionDescription?: string | null,
      questionId: string,
      questionName?: string | null,
      questionNumber?: number | null,
      questionSubject?: string | null,
      updatedAt: string,
    } | null,
    questionId?: string | null,
    reports?:  {
      __typename: "ModelReportDataConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      cards?: Array< string | null > | null,
      cognitoUserName?: string | null,
      computerIP?: string | null,
      createdAt: string,
      email?: string | null,
      isAdmin?: boolean | null,
      name?: string | null,
      phone?: string | null,
      picture?: string | null,
      sessionStart?: number | null,
      surname?: string | null,
      updatedAt: string,
      userId: string,
      userPrograms?: Array< string | null > | null,
    } | null,
    userDataId: string,
    userId?: string | null,
    userStatus?: string | null,
  } | null,
};

export type OnUpdateUserProgramSubscriptionVariables = {
  filter?: ModelSubscriptionUserProgramFilterInput | null,
};

export type OnUpdateUserProgramSubscription = {
  onUpdateUserProgram?:  {
    __typename: "UserProgram",
    createdAt: string,
    currentStatus?: string | null,
    email?: string | null,
    expiredAt?: number | null,
    isOpen?: boolean | null,
    nextQuestion?: string | null,
    programName?: string | null,
    treasure?: number | null,
    updatedAt: string,
    userProgramId: string,
  } | null,
};

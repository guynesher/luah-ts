import { type PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../store/createAppSlice"
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource'

const client = generateClient<Schema>();

interface Item {
    "itemId": string
    "questionId": string
    "questionNumber": number
    "itemNumber": number
    "itemType": string
    "itemPosition": [string,string]
    "itemSize": [string,string]
    "itemCondition": [any,any]
    "step": number
    "loop": boolean
    "autoplay": boolean
    "animationName": string
    "animation": any
    "isAudioPlay": boolean
    "isAudioHoover": boolean
    "isAudioClick": boolean
    "audioData": any
    "segments": number[]
    "createdAt": string
    "updatedAt": string
  }

interface Profile {
  currentProfile: string
  currentProfileNumber: string
  profileList: string []
  profileIndexList: number []
}

interface ActionBtn {
  btnname: string
  condition: string 
}

export interface MisSliceState {
  profile: Profile 
  activeStatus: string
  currentProgram: string
  buttons: ActionBtn[]
  audio: boolean
  test: boolean
  users: any[] | undefined
  recoms: any[] | undefined
  contacts: any[] | undefined
  orders: any[] | undefined
  programs: any[] | undefined
  levels: any[] | undefined
  chapters: any[] | undefined
  questions: any[] | undefined
  items: any[] | undefined
  datas: any[] | undefined
  misStatus: "idle" | "loading" | "failed"
}

// const current=new Date()
// current.setHours(current.getHours() +3);

 const ls: Record<string, any> | null = localStorage.getItem('luah-mis') ? JSON.parse(localStorage.getItem('luah-mis') as string) : null;
 //console. log(ls)

const initialState: MisSliceState = {
  profile: {
    currentProfile: ls?.currentProfile?ls?.currentProfile:"שלום",
    currentProfileNumber: ls?.currentProfileNumber?ls?.currentProfileNumber:"1",
    profileList:  ls?.profileList?ls?.profileList:["שלום"],
    profileIndexList: ls?.profileIndexList?ls.profileIndexList:[1]
  }, 
  activeStatus: "",
  currentProgram: "",
  buttons: [{btnname: "focus", condition: ""},{btnname: "play", condition: ""}],
  audio:false,
  test:false,
  recoms: undefined,
  users: undefined,
  contacts: undefined,
  orders: undefined,
  programs: undefined,
  levels: undefined,
  chapters: undefined,
  questions: undefined,
  items: undefined,
  datas: undefined,
  misStatus: "idle",
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const misSlice = createAppSlice({
  name: "Mis",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    setCurrentProfile: create.reducer(
      (state, action: PayloadAction<Profile>) => {
        state.profile = action.payload
        localStorage.setItem('luah-mis',JSON.stringify(state.profile))
      },
    ),
    setCurrentProfileNum: create.reducer(
      (state, action: PayloadAction<string>) => {
        const currls= localStorage.getItem('luah-mis') ? JSON.parse(localStorage.getItem('luah-mis') as string) : null;
        //console.log(Number(action.payload),currls,currls?.profileIndexList[Number(action.payload)-1] )
        state.profile.currentProfileNumber = (currls?.profileIndexList[Number(action.payload)-1]).toString()
        localStorage.setItem('luah-mis',JSON.stringify(state.profile))
      },
    ),
    setCurrentProfileName: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.profile.currentProfile = action.payload
        localStorage.setItem('luah-mis',JSON.stringify(state.profile))
      },
    ),
    setActiveStatus: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.activeStatus = action.payload
      },
    ),
    setCurrentProgram: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.currentProgram = action.payload
      },
    ),
    setButtons: create.reducer(
      (state, action: PayloadAction<ActionBtn>) => {
        state.buttons = [...state.buttons, action.payload]
      },
    ),
    setButton: create.reducer(
      (state, action: PayloadAction<ActionBtn>) => { 
        const pos = state.buttons.map(e => e.btnname).indexOf(action.payload.btnname)!==-1?
                    state.buttons.map(e => e.btnname).indexOf(action.payload.btnname):state.buttons.length;
        const focus = state.buttons.map(e => e.btnname).indexOf("focus")
        const play = state.buttons.map(e => e.btnname).indexOf("play")
        state.buttons[focus].condition=action.payload.btnname
        state.buttons[pos]=action.payload
        if(action.payload.condition==="play") state.buttons[play].condition=action.payload.btnname
        if(action.payload.condition==="complete") state.buttons[play].condition=""
      },
    ),
    clearButtons: create.reducer(
      (state) => {
        state.buttons = [{btnname: "focus", condition: ""},{btnname: "play", condition: ""}]
      },
    ),
    clearDatas: create.reducer(
      (state) => {
        state.datas = undefined
      },
    ),
    clearPlay: create.reducer(
      (state) => {
        const play = state.buttons.map(e => e.btnname).indexOf("play")
        if(state.buttons[play].condition==="play" && state.buttons[play].btnname!=="") {
          const nm=state.buttons[play].btnname
          const btn = state.buttons.map(e => e.btnname).indexOf(nm)
          state.buttons[btn].condition="complete"
        } 
      },
    ),
    setAudio: create.reducer(
      (state, action: PayloadAction<boolean>) => {
        state.audio=action.payload
      },
    ),
    setTest: create.reducer(
      (state, action: PayloadAction<boolean>) => {
        state.test=action.payload
      },
    ),
    setItems: create.reducer(
      (state, action: PayloadAction<Item[]>) => {
        state.items=action.payload
      },
    ),
    setItemsAsync: create.asyncThunk(
      async (nextQuestionId: string) => {
        const response = await client.models.Question.get(
          { questionId: nextQuestionId },
          { selectionSet: ["questionId", "items.*"] },
        ).catch((error: any)=>console.log('GET call failed: ',error))
        return response?.data?.items.sort(function(a,b) {
          return Number(a.itemNumber) - Number(b.itemNumber)
       });
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          state.items=action.payload
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    getBestRecom: create.asyncThunk(
      async () => {
        const response = await client.models.Recommendation.list(
          { filter: {rating: {eq:5}}, selectionSet: ["recommendationId","name","text","rating","createdAt"],
            authMode:"apiKey" }
        ,)
        .catch((error: any)=>console.log('GET call failed: ',error))
        const backsort=response?.data
           .sort(function(a:any,b:any) {
           return Number(b.recommendationId.slice(3,16)) - Number(a.recommendationId.slice(3,16))
             })
        return backsort
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          state.recoms=action.payload
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    getAllUsers: create.asyncThunk(
      async () => {
        const response = await client.models.User.list(
          {
            selectionSet: ["userId","email","name","surname","cognitoUserName","computerIP","phone","isAdmin",
              "createdAt","updatedAt"], limit: 50000
          }
        ,)
        .catch((error: any)=>console.log('GET call failed: ',error))
        return response?.data
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          state.users=action.payload
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    getAllUserPrograms: create.asyncThunk(
      async () => {
        const response = await client.models.UserProgram.list(
          {
            selectionSet: ["userProgramId","email","isOpen","programName","chapterAverage","treasure","currentStatus",
              "nextQuestion","createdAt","updatedAt","expiredAt"], limit: 50000
          }
        ,)
        .catch((error: any)=>console.log('GET call failed: ',error))
        return response?.data
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          state.users=action.payload
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    getAllContacts: create.asyncThunk(
      async () => {
        const response = await client.models.Contact.list(
          {
            selectionSet: ["contactId","user.userId","email","name","phone","text","isAnswered",
                             "updatedAt","createdAt"], limit: 50000
          }
        ,)
        .catch((error: any)=>console.log('GET call failed: ',error))
        return response?.data
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          state.contacts=action.payload
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    getAllOrders: create.asyncThunk(
      async () => {
        const response = await client.models.Order.list(
          {
            selectionSet: ["orderId","refNumber","user.userId","billingDetails","totalPrice","isPaid","isDelivered",
                             "updatedAt","createdAt"], limit: 50000
          }
        ,)
        .catch((error: any)=>console.log('GET call failed: ',error))
        
        return response?.data
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          state.orders=action.payload
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    getAllDatas: create.asyncThunk(
      async (params: string[]) => {
        const response = await client.models.UserData.listDatasByUser(
          {
            userId: params[0],
            // programId: params[1],
          }, 
          {limit: 30000, 
            selectionSet: ["userId","userDataId","questionId","answer","precent",
              "question.chapter.level.program.programId", "question.chapter.level.levelId", "question.chapter.level.levelNumber",
              "question.chapter.chapterId","question.chapter.chapterNumber","question.chapter.bundleNumber",
              "question.questionNumber","question.questionSubject","question.questionDescription",
              "nextQuestion","userStatus","updatedAt","user.email","user.name","user.picture"] 
          }
        ,)
        .catch((error: any)=>console.log('GET call failed: ',error))
        return response?.data
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          state.datas=action.payload
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    getAllPrograms: create.asyncThunk(
      async (params: string[]) => {
        let response:any =[] 
        if(Object.keys(params).length===0) response = await client.models.Program.list(
          {
            selectionSet: ["createdAt","programAnimation","programAnimationName","programDescription",
              "programId","programName","programNumber","programSubject","updatedAt"],
          }
        ,)
        .catch((error: any)=>console.log('GET call failed: ',error))
        return response?.data
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          state.programs=action.payload
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    getAllLevels: create.asyncThunk(
      async (param: string) => {
        const response = await client.models.Level.listLevelsByProgramName({programName: param})
        .catch((error: any)=>console.log('GET call failed: ',error))
        const byNum = response?.data.slice(0); 
        if(byNum) byNum.sort(function(a,b) {
            if(a.levelNumber && b.levelNumber) return a.levelNumber - b.levelNumber
            else{return -1}
        });  
        let arr=[]    
        if(byNum) for (let index = 0; index < byNum.length; index++) { //Remove non-serializable
          arr[index]={createdAt: byNum[index].createdAt,
            levelAnimation: byNum[index].levelAnimation,
            levelAnimationName: byNum[index].levelAnimationName,
            levelDescription: byNum[index].levelDescription,
            levelId: byNum[index].levelId,
            levelName: byNum[index].levelName,
            levelNumber: byNum[index].levelNumber,
            levelSubject: byNum[index].levelSubject,
            programName: byNum[index].programName,
            updatedAt: byNum[index].updatedAt}
        }
        return arr
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          state.levels=action.payload
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    getAllChapters: create.asyncThunk(
      async (params: string[]) => {
        const response = await client.models.Chapter.list({filter: {
          levelNumber: {eq: Number(params[1])},
          levelId: {eq: params[0]}
        },limit:30000})
        .catch((error: any)=>console.log('GET call failed: ',error))
        // const response = await client.models.Chapter.listChaptersByLevelNumber({levelNumber: Number(param)},{limit:3000})
        // .catch((error: any)=>console.log('GET call failed: ',error))
        const byNum = response?.data;
        let arr=[]    
        if(byNum) for (let index = 0; index < byNum.length; index++) { //Remove non-serializable
          arr[index]={createdAt: byNum[index].createdAt,
            chapterAnimation: byNum[index].chapterAnimation,
            chapterAnimationName: byNum[index].chapterAnimationName,
            chapterDescription: byNum[index].chapterDescription,
            chapterId: byNum[index].chapterId,
            levelId: byNum[index].levelId,
            chapterName: byNum[index].chapterName,
            levelNumber: byNum[index].levelNumber,
            chapterNumber: byNum[index].chapterNumber,
            chapterSubject: byNum[index].chapterSubject,
            bundleNumber: byNum[index].bundleNumber,
            conditionsList: byNum[index].conditionsList,
            updatedAt: byNum[index].updatedAt}
        }

        const strToNum= (s:string) => {
          if(s) { let num=0
            for (let index = 0; index < s.length; index++) {num += s[index].charCodeAt(0) - 97;}
            return num}
          return 100
        }

        if(arr) arr.sort(function(a,b) {
          if(a.chapterName && b.chapterName) return Number(a.chapterNumber) - Number(b.chapterNumber) || Number(a.bundleNumber) - Number(b.bundleNumber)
                  || strToNum(a.chapterName)-strToNum(b.chapterName);
          else return Number(a.chapterNumber) - Number(b.chapterNumber) || Number(a.bundleNumber) - Number(b.bundleNumber)
        });
        return arr
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          state.chapters=action.payload
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    getAllQuestions: create.asyncThunk(
      async (params: any[]) => { 
        const response=await client.models.Question.list(
          {filter: {
          questionSubject: {eq: params[0]},
          questionDescription: {eq: params[1]}
        },limit:30000})
        .catch((error: any)=>console.log('GET call failed: ',error))
        const byNum = response?.data;
        let arr=[]    
        if(byNum) for (let index = 0; index < byNum.length; index++) { //Remove non-serializable
          arr[index]={createdAt: byNum[index].createdAt,
            questionAnimation: byNum[index].questionAnimation,
            questionAnimationName: byNum[index].questionAnimationName,
            questionDescription: byNum[index].questionDescription,
            chapterId: byNum[index].chapterId,
            questionId: byNum[index].questionId,
            questionName: byNum[index].questionName,
            chapterNumber: byNum[index].chapterNumber,
            questionNumber: byNum[index].questionNumber,
            questionSubject: byNum[index].questionSubject,
            permutationList: byNum[index].permutationList,
            updatedAt: byNum[index].updatedAt}
        }
        if(arr) arr.sort(function(a,b) {
           return Number(a.questionNumber) - Number(b.questionNumber)
        });
        return arr
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          state.questions=action.payload
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    updateUserProgram: create.asyncThunk(
      async (params: string[]) => {
        const currentTimeAsMs = Number(Date.now());
        const newTime = Number(currentTimeAsMs) + (1000 * 60 * 60 * 24 * 365);
        await client.models.UserProgram.update(
          { userProgramId: params[0],  
            isOpen: params[1]==="true"?true:false,
            expiredAt: newTime,
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    updateContact: create.asyncThunk(
      async (params: string[]) => {
        await client.models.Contact.update(
          { contactId: params[0],  
            isAnswered: true,
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    updateGender: create.asyncThunk(
      async (params: string[]) => {
        await client.models.User.update(
          { userId: params[0],  
            picture: params[1],
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    updateProgram: create.asyncThunk(
      async (params: string[]) => {
        await client.models.Program.update(
          { programId: params[0],  
            programName: params[1],
            programNumber: Number(params[2]),
            programSubject: params[3],
            programDescription: params[4],
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    updateLevel: create.asyncThunk(
      async (params: string[]) => {
        await client.models.Level.update(
          { levelId: params[0],  
            levelName: params[1],
            levelNumber: Number(params[2]),
            levelSubject: params[3],
            levelDescription: params[4],
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    updateChapter: create.asyncThunk(
      async (params: string[]) => {
        await client.models.Chapter.update(
          { chapterId: params[0],  
            chapterName: params[1],
            chapterNumber: Number(params[2]),
            bundleNumber:[Number(params[3])],
            chapterSubject: params[4],
            chapterDescription: params[5],
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    updateQuestion: create.asyncThunk(
      async (params: string[]) => {
        await client.models.Question.update(
          { questionId: params[0],  
            questionName: params[1],
            questionNumber: Number(params[2]),
            questionSubject: params[3],
            questionDescription: params[4],
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    updateItem: create.asyncThunk(
      async (params: string[]) => {
        await client.models.Item.update(
          { itemId: params[0],  
            itemNumber: Number(params[1]),
            itemType: params[2],
            step: Number(params[3]),
            animationName: params[4],
            itemCondition: [params[5],params[6]],
            itemPosition: [params[7],params[8]],
            itemSize: [params[9],params[10]],
            segments: [Number(params[11]),Number(params[12]),Number(params[13]),Number(params[14]),Number(params[15]),Number(params[16]),],
            audioData: params[17],
            loop: params[18]==="true"?true:false,
            autoplay: params[19]==="true"?true:false,
            isAudioClick: params[20]==="true"?true:false,
            isAudioHoover: params[21]==="true"?true:false,
            isAudioPlay: params[22]==="true"?true:false,
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    createNewContact: create.asyncThunk(
      async (params: string[]) => {
        const timestamp = Date.now().toString()+Math.abs(Date.now()).toString(16)
        const check=await client.models.Contact.create(
          { contactId: "CNT"+timestamp,  
            userId: params[0]==="X"?"273542832-4021-70e3-063a-86b143392525":params[0],
            name: params[1],
            email: params[2],
            phone: params[3],
            text: params[4], 
            isAnswered: false,
          }, {authMode:"apiKey"}
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return check?.data?.contactId?true:false
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          if(action.payload) state.activeStatus = "contactDone"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    createNewRecommendation: create.asyncThunk(
      async (params: string[]) => {
        const timestamp = Date.now().toString()+Math.abs(Date.now()).toString(16)
        const check=await client.models.Recommendation.create(
          { recommendationId: "RCM"+timestamp,  
            userId: params[0],
            name: params[1],
            text: params[2],
            rating: Number(params[3]),
          }, {authMode:"apiKey"}
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return check?.data?.recommendationId?true:false
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          if(action.payload) {
            state.activeStatus = "recomDone"
          }
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    createLevel: create.asyncThunk(
      async (params: string[]) => {
        const timestamp = Math.abs(Date.now()).toString(16)+params[0]
        await client.models.Level.create(
          { levelId: "LVL"+timestamp,
            programName: params[0],
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    createChapter: create.asyncThunk(
      async (params: string[]) => {
        const timestamp = Date.now().toString()+Math.abs(Date.now()).toString(16)
        await client.models.Chapter.create(
          { chapterId: "CPTR"+timestamp,  
            levelId: params[0],
            levelNumber: Number(params[1]),
            chapterNumber: 1,
            bundleNumber: [1],
            chapterName: "שם",
            chapterSubject: "0"+params[2],
            chapterDescription: params[1]+"010100", 
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    createQuestion: create.asyncThunk(
      async (params: string[]) => {
        const timestamp = Date.now().toString()+Math.abs(Date.now()).toString(16)
        await client.models.Question.create(
          { questionId: "QST"+timestamp,  
            chapterId: params[0],
            questionNumber: 1,
            chapterNumber: 1,
            questionName: params[1],
            questionSubject: params[2],
            questionDescription: params[3]
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    createItem: create.asyncThunk(
      async (params: string[]) => {
        const timestamp = Date.now().toString()+Math.abs(Date.now()).toString(16)
        await client.models.Item.create(
          { itemId: "ITM"+timestamp,
            questionId: params[0],
            questionNumber: Number(params[1]),  
            itemNumber: Number(params[2]),
            itemType: params[3],
            step: Number(params[4]),
            animationName: params[5],
            itemCondition: [params[6],params[7]],
            itemPosition: [params[8],params[9]],
            itemSize: [params[10],params[11]],
            segments: [Number(params[12]),Number(params[13]),Number(params[14]),Number(params[15]),Number(params[16]),Number(params[17]),],
            audioData: params[18],
            loop: params[19]==="true"?true:false,
            autoplay: params[20]==="true"?true:false,
            isAudioClick: params[21]==="true"?true:false,
            isAudioHoover: params[22]==="true"?true:false,
            isAudioPlay: params[23]==="true"?true:false,
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    createItems: create.asyncThunk(
      async (arr: string[][]) => {
        for (let index = 0; index < arr.length; index++) {
          const params = arr[index];
        const timestamp = Date.now().toString()+Math.abs(Date.now()).toString(16)
        await client.models.Item.create(
          { itemId: "ITM"+timestamp,
            questionId: params[0],
            questionNumber: Number(params[1]),  
            itemNumber: Number(params[2]),
            itemType: params[3],
            step: Number(params[4]),
            animationName: params[5],
            itemCondition: [params[6],params[7]],
            itemPosition: [params[8],params[9]],
            itemSize: [params[10],params[11]],
            segments: [Number(params[12]),Number(params[13]),Number(params[14]),Number(params[15]),Number(params[16]),Number(params[17]),],
            audioData: params[18],
            loop: params[19]==="true"?true:false,
            autoplay: params[20]==="true"?true:false,
            isAudioClick: params[21]==="true"?true:false,
            isAudioHoover: params[22]==="true"?true:false,
            isAudioPlay: params[23]==="true"?true:false,
          }
        )
        .catch((error: any)=>console.log('GET call failed: ',error))
      }
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
    deleteItem: create.asyncThunk(
      async (param: string) => {
        await client.models.Item.delete({itemId: param})
        .catch((error: any)=>console.log('GET call failed: ',error))
        return 
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state) => {
          state.misStatus = "idle"
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
  }),

  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectProfile: mis => mis.profile,
    selectActiveStatus: mis => mis.activeStatus,
    selectCurrentUserProfileNumber: mis => mis.profile.currentProfileNumber,
    selectButtons: mis => mis.buttons,
    selectAudio: mis => mis.audio,
    selectCurrentProgram: mis => mis.currentProgram,
    selectTest: mis => mis.test,
    selectItems: mis => mis.items,
    selectDatas: mis => mis.datas,
    selectUsers: mis => mis.users,
    selectRecoms: mis => mis.recoms,
    selectContacts: mis => mis.contacts,
    selectOrders: mis => mis.orders,
    selectPrograms: mis => mis.programs,
    selectLevels: mis => mis.levels,
    selectChapters: mis => mis.chapters,
    selectQuestions: mis => mis.questions,
  },
})

// Action creators are generated for each case reducer function.
export const { setCurrentProfile, setActiveStatus, setCurrentProfileNum, setCurrentProfileName, setAudio, setButton, getBestRecom,
        setButtons , setItems, setItemsAsync, getAllPrograms, getAllLevels, getAllChapters, clearPlay, createNewContact, 
        getAllQuestions, updateProgram, updateLevel, updateChapter, updateQuestion, updateItem, setTest, createNewRecommendation,
        clearButtons, createLevel, createChapter, createQuestion, createItem, deleteItem, createItems, getAllDatas,
        getAllUsers,getAllUserPrograms,updateUserProgram, getAllContacts,updateContact,getAllOrders,
        updateGender, clearDatas, setCurrentProgram} = misSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectProfile, selectActiveStatus, selectCurrentUserProfileNumber, selectButtons, selectCurrentProgram, 
        selectAudio , selectItems, selectPrograms, selectLevels, selectChapters,selectQuestions, 
        selectTest, selectRecoms, selectContacts, selectOrders, selectUsers, selectDatas} = misSlice.selectors


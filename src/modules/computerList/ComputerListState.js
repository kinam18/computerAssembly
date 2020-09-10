import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAsYNibURl-Ck_RwMy0uKP38LH5O_Y_t5Q',
  authDomain: 'computerassembly-e6bbd.firebaseapp.com',
  databaseURL: 'https://computerassembly-e6bbd.firebaseio.com',
  projectId: 'computerassembly-e6bbd',
  storageBucket: 'computerassembly-e6bbd.appspot.com',
  messagingSenderId: '712359010029',
  appId: '1:712359010029:web:6d9411f0a02880243076e4',
  measurementId: 'G-P20W28N7KG',
};
firebase.initializeApp(firebaseConfig);
const initialState = {
  CPUList: [],
  isLoading: false,
};
const dbh = firebase.firestore();

const START_CPULIST_LOADING = 'ComputerListState/START_LOADING';
const CPULIST_LOADED = 'ComputerListState/CPULIST_LOADED';

export function loadCPUList () {
  return dispatch => {
    dispatch(startImagesLoading());
    let cpuList = [];
    dbh
      .collection('CPU')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach( (doc)=> {
          // doc.data() is never undefined for query doc snapshots
          const item = doc.data();
          item.name = doc.data().Model
          cpuList.push(item);
        });
      })
      .catch( (error) => {
        console.log('Error getting documents: ', error);
      });
    dispatch(cpuListLoaded(cpuList));
    console.log("cpuList",cpuList);
  };
}

function startImagesLoading () {
  return { type: START_CPULIST_LOADING };
}

function cpuListLoaded (list) {
  return {
    type: CPULIST_LOADED,
    list,
  };
}

export default function ComputerListStateReducer (
  state = initialState,
  action = {},
) {
  switch (action.type) {
    case START_CPULIST_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case CPULIST_LOADED:
      return Object.assign({}, state, {
        isLoading: true,
        CPUList: action.list,
      });
    default:
      return state;
  }
}

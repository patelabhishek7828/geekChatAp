import { ActivityIndicator, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { formHead, formHead2 } from '../../CommonCss/formCss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavBar from '../../Components/TopNavBar'
import { srchBar } from '../../CommonCss/pagecss'
import UserCard from '../../Cards/UserCard'

// const SearchuserPage = ({ navigation }) => {
//   const [keyword, setKeyword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const[data, setData] = useState([]);
//   const[error, setError] = useState(null);

//   const getAllUsers = () => {
//     if(keyword.length > 0){
//       setLoading(true);
//       fetch('http://192.168.1.106:3000/searchuser', {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ keyword : keyword })
//       }).then(res => res.json()).then(data => {
//         if(data.error){
//           setData([]);
//           setError(data.error);
//           setLoading(false);
//         }
//         else if(data.message == 'User Found') {
//           setError(null);
//           setData(data);
//           setLoading(false);
//         }
//       }).catch(err => {
//         setData([]);
//         setLoading(false);
//       })
//     }
//   }

//   useEffect(()=>{
//     getAllUsers()
//   }, [keyword])

//   // let data = [
//   //   {
//   //     username: "sandeep@124",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   //   {
//   //     username: "rohit9877",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   //   {
//   //     username: "mahesh_126",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   //   {
//   //     username: "abhishek7828",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   //   {
//   //     username: "akshayPatel",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   //   {
//   //     username: "Akhilesh",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   //   {
//   //     username: "vikasTiwari",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   //   {
//   //     username: "akshayPatel1989",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   //   {
//   //     username: "rajShubham",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   //   {
//   //     username: "vishnuApcomp11",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   //   {
//   //     username: "akshay1989",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   //   {
//   //     username: "rajShubham778787",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   //   {
//   //     username: "vishnuExprtajjld",
//   //     profile_image: "https://picsum.photos/200/300",
//   //   },
//   // ]
//     return (
//         <View style={styles.container}>
//           <StatusBar />
//           <TopNavBar navigation={navigation} />
//           <Bottomnavbar navigation={navigation} page={"SearchuserPage"}/>

//           <TextInput onChangeText={(text) => { setKeyword(text) }} style={srchBar} placeholder='Enter Search'/>
//             {
//               loading ? <ActivityIndicator color="white"/> : 
//               <>
//                 {
//                   error ? <Text style={{color: 'white'}}>{error}</Text> :
//                   <ScrollView style={styles.userListScroll}>
//                     {
//                       data.map((item, index)=> {
//                         return <UserCard key={item.username} user={item}/>
//                       })
//                     }
//                   </ScrollView> 
//                 }
//               </>
//             }
//         </View>
//       )
//     }

// const styles = StyleSheet.create({
//     container: {
//       width: '100%',
//       height: '100%',
//       backgroundColor: '#000',
//       paddingVertical: 50,
//     },
//     searchInput: {
//       color:"#fff", 
//       width:'100%', 
//       height:20
//     },
//     userListScroll:{
//       width:'100%',
//       marginTop:20,
//     }
//   })

// export default SearchuserPage;



const SearchuserPage = ({ navigation }) => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getAllUsers = () => {
    if (keyword.length > 0) {
      setLoading(true);
      fetch('http://192.168.1.106:3000/searchuser', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ keyword: keyword })
      }).then(res => res.json()).then(data => {
        if (data.error) {
          setData([]);
          setError(data.error);
        } else if (data.message === 'User Found') {
          setError(null);
          setData(data.users); // Assuming your response has a 'data' field
          setLoading(false);
        }
        setLoading(false);
      }).catch(err => {
        setError('Error fetching data');
        setLoading(false);
      })
    } else {
      setData([]);
      setError(null);
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [keyword])

  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} />
      <Bottomnavbar navigation={navigation} page={"SearchuserPage"} />

      <TextInput onChangeText={(text) => { setKeyword(text) }} style={srchBar} placeholder='Enter Search' />
      {
        loading ? <ActivityIndicator color="white" /> :
          <>
            {
              error ? <Text style={{ color: 'white' }}>{error}</Text> :
                <ScrollView style={styles.userListScroll}>
                  {
                    data.map((item, index) => (
                      <UserCard key={item.username} user={item} navigation={navigation}/>
                    ))
                  }
                </ScrollView>
            }
          </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      paddingVertical: 50,
    },
    searchInput: {
      color:"#fff", 
      width:'100%', 
      height:20
    },
    userListScroll:{
      width:'100%',
      marginTop:20,
    }
  })
  
export default SearchuserPage;

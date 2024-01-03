import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const PostsCards = (props) => {

  const { item } = props;

  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.cont1}>
        {/* <Image source={{ uri: item.profilepic }} style={{width:'100', height:'100'}}/> */}
        <Image source={{ uri: item.profilepic}} style={styles.profilePic}/>
        <Text style={styles.username}>{item.username}</Text>
      </View>
        <Image source={{ uri: item.image}} style={{ height:300}}/>
        <View style={styles.likeCommentView}>
          <View style={{}}>
            {
              isLiked ? <View style={styles.likesView}>
                <AntDesign name="heart" size={24} color="red" onPress={() => {
                  setIsLiked(false)
                }}/>
                <Text style={styles.likesSec}>{item.likes.length + 1}</Text>
              </View> :
              <View style={styles.likesView}>
                <AntDesign name="hearto" size={24} color="gray" onPress={() => {
                  setIsLiked(true)
                }}/>
                <Text style={styles.likesSec}>{item.likes.length}</Text>
              </View>
            }
          </View>
          <View>
            <FontAwesome name="comment" left={15} size={24} color="#fff" onPress={()=>{setShowComments(!showComments)}} />
          </View>
        </View>
        {
          showComments == true && 
          <View style={styles.commentMainView}>
            {
              item.comments.map((item)=>{
                return (
                  <View key={item.id} style={styles.s31}>
                    <Text style={styles.commentUser}>{item.username}</Text>
                    <Text style={styles.commentText}>{item.comment}</Text>
                  </View>
                )
              })
            }
          </View>
        }
    </View>
  )
}

export default PostsCards

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:'95%',
    marginHorizontal:10,
    // height: 384,
    // borderRadius: 10,
    // borderRadius: 10,
    marginVertical:10,
    borderColor:'#fff',
    borderWidth:1
  },
  cont1: {
    width:'100%',
    // borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical:5,
    paddingHorizontal:5,
    backgroundColor:'black'
  },
  profilePic: {
    backgroundColor:'black',
    width:40,
    height:40, 
    borderRadius:20,
    borderWidth:1,
    borderColor:'#fff'
  },
  username:{
    fontSize: 16,
    marginLeft: 10,
    color: 'white',
    fontWeight:'bold'
  },
  likesView:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:10,
    paddingHorizontal:10
  },
  likesSec:{
    color: '#fff',
    fontSize: 16,
    marginLeft:5
  },
  likeCommentView: {
    flexDirection:'row', 
    backgroundColor: '#000', 
    // width:'100%', 
    alignItems:'center', 
    // justifyContent:'space-between'
  },
  commentMainView:{
    width:'100%',
    backgroundColor:"#222222",
    paddingVertical: 5
  },
  commentUser :{
    marginLeft:10,
    color:"#fff"
  },
  commentText:{
    color:'gray',
    marginLeft: 15
  }
})
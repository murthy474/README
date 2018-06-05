
import React, { Component } from 'react';
import {
  Platform,FlatList,
  StyleSheet,
  Text,Image,
  View,
  TouchableHighlight
} from 'react-native';

export default class Subreadme extends Component{
   state={
    itemdetails:[],perticularuser:[],
   }
    componentDidMount(){
        this.setState({itemdetails:this.props.navigation.state.params.subdata},()=>{this.showpage(this.state.itemdetails)
    });
    }
    showpage(data){
        if(data){
        // this.setState({showinnerdata:'flex'});
        console.warn(this.state.itemdetails.url);
        fetch(data.url, {
              method: 'GET',
          }).then((response) => response.json())
              .then((responseJson) => {
                   console.warn(responseJson);
                    this.setState({perticularuser:responseJson});
                     })
              .catch((error) => {
                  console.error(error);
              });
        }else{
            return false;
        }
      }
      renderdata(){
          if(this.state.perticularuser){
            return(
                <View >
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:20,marginVertical:10}}>{this.state.perticularuser.login}</Text>
                          {this.renderimage(this.state.perticularuser)}         
                   </View>
                   <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center'}}>
                   <TouchableHighlight style={{height:40,width:80,alignSelf:'center',borderColor:'red',margin:10,borderWidth:1}}
                      onPress={()=>{ this.props.navigation.navigate('Userfollwers',{'Userfollwersdata':this.state.perticularuser.followers_url})}}>
                       <Text style={{fontSize:14,alignSelf:'center'}}>followers</Text>
                    </TouchableHighlight>   

                    <TouchableHighlight style={{height:40,width:80,alignSelf:'center',borderColor:'red',margin:10,borderWidth:1}}
                     onPress={()=>{ this.props.navigation.navigate('Userfollwings',{'Userfollwingsdata':this.state.perticularuser.following_url})}}>
                       <Text style={{fontSize:14,alignSelf:'center'}}>followings</Text>
                    </TouchableHighlight>
                    </View>
                    <View style={{alignItems:'center',alignSelf:'center'}}>
                        <Text style={{fontSize:16,alignSelf:'center',margin:10}}>NAME:{this.state.perticularuser.name}</Text>
                        <Text style={{fontSize:16,alignSelf:'center'}}>COMPANY NAME:{this.state.perticularuser.company}</Text>
                        <Text style={{fontSize:16,alignSelf:'center',margin:10}}>LACATION:{this.state.perticularuser.location}</Text>
                        <Text style={{fontSize:14,alignSelf:'center'}}>FOLLWERS:{this.state.perticularuser.followers}</Text>
                       <Text style={{fontSize:14,alignSelf:'center',margin:10}}>FOLLOWING:{this.state.perticularuser.following}</Text>
                        
                    </View>
                </View>
            );
          }else{
              return false;
          }
      }
      renderimage(imagedata){
          if(imagedata.avatar_url !== ""){
             return(
                 <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image source={{ uri: imagedata.avatar_url }}
                style={{ width:150, height: 150, resizeMode: 'cover' }} />    
                </View>
             );

          }else{
              return false;
          }
      }
    render() {
        return(

            <View>
               {this.renderdata()}
                            </View>
        );
    }
}
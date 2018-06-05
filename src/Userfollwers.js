
import React, { Component } from 'react';
import {
  Platform,FlatList,
  StyleSheet,Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Userfollwers extends Component{
   state={
    itemdetails:[],perticularuser:[],follwersdata:[],
   }
    componentDidMount(){
        this.setState({follwersdata:this.props.navigation.state.params.Userfollwersdata},()=>{this.showpage(this.state.follwersdata)
    });
    }
    showpage(data){
        if(data){
        // this.setState({showinnerdata:'flex'});
        console.warn(this.state.itemdetails.url);
        fetch(data, {
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
              console.warn(this.state.perticularuser);
                return(
                    <View>
                        
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,alignSelf:'center',color:'red'}}>THOSE ARE FOLLOWER USERS</Text>
                    </View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={this.state.perticularuser}
                            renderItem={({ item }) => this.userdata(item)}
                            keyExtractor={(item, index) => index}
                            />
                    </View>
                );
          }else{
              return false;
          }
      }
      userdata(data){
            return(
                <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',borderColor:'black',borderWidth:0.5,margin:10}}>
                    {this.renderimage(data)}
                   <Text style={{alignSelf:'center',fontSize:14,margin:5}}>{data.login}</Text>     
                </View>
            );
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
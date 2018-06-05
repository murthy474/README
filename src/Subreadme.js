
import React, { Component } from 'react';
import {
  Platform,FlatList,
  StyleSheet,
  Text,
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
        fetch(data.followers_url, {
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
                <View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:14,alignSelf:'center'}}>THOSE ARE FOLLOWER USERS</Text>
                    </View>
                   <Text>{data.login}</Text>     
                </View>
            );
      }
    render() {
        return(

            <View>
               {this.renderdata()}
                            </View>
        );
    }
}
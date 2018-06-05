
import React, { Component } from 'react';
import {
  Platform,FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


export default class App extends Component {

  state = {gituser:[],perticularuser:[],showinnerdata:'flex'};

  componentDidMount() {
     this.fetchingdata();
  }
  fetchingdata() {
    fetch('https://api.github.com/users', {
        method: 'GET',
    }).then((response) => response.json())
        .then((responseJson) => {
             console.warn(responseJson);
            this.setState({gituser:responseJson},()=>{});
               })
        .catch((error) => {
            console.error(error);
        });
}
usersflatlist(data){
    return(
      <View>
      <TouchableHighlight style={{backgroundColor:'white'}} onPress={()=>{ this.props.navigation.navigate('userslist',{'subdata':data})}}>
      <View style={{height:20,width:250,borderColor:'black',justifyContent:'center',borderWidth:0.5,flexDirection:'column',margin:10,alignSelf:'center'}}>
       <Text style={{fontSize:15,alignSelf:'center',paddingVertical:10}}>{data.login}</Text>          
      </View>
      </TouchableHighlight>
     
    </View>
    );
}

renderingdata(){
  if(this.state.gituser){
   return(
     <View>
       <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.state.gituser}
          renderItem={({ item }) => this.usersflatlist(item)}
          keyExtractor={(item, index) => index}
        />
       </View>
   );
  }else{
    return null;
  }
}
  render() {
    return(
    <View style={{flex:1}}>
            {this.renderingdata()}
    </View>
    );
  }
}


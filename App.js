
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
      <TouchableHighlight style={{backgroundColor:'white'}} onPress={()=>{this.showpage(data)}}>
      <View style={{height:20,width:250,borderColor:'black',justifyContent:'center',borderWidth:1,flexDirection:'column',margin:10,alignSelf:'center'}}>
       <Text style={{fontSize:15,alignSelf:'center',paddingVertical:10}}>{data.login}</Text>          
      </View>
      </TouchableHighlight>
      <View style={{display:this.state.showinnerdata}}>
      {this.innerdata()}
    </View>
    </View>
    );
}
innerdata(){
  console.warn(this.state.perticularuser,'this.state.perticularuser')
  if(this.state.perticularuser){
    return(
      <View>
        {this.state.perticularuser.map(function (data, index){
             console.warn("this is my data",data);
        } )}        
                </View>
    );
  }else{
    return false;
  }
}
innerflatlist(innerinnerdata){
  console.warn('this is my daya form')
  return(
    <View>
        <Text>data</Text>
      </View>
  );
}
showpage(link){
  this.setState({showinnerdata:'flex'});
  console.warn(link.url,this.state.showinnerdata);
  fetch(link.url, {
        method: 'GET',
    }).then((response) => response.json())
        .then((responseJson) => {
             console.warn(responseJson);
              this.setState({perticularuser:responseJson});
               })
        .catch((error) => {
            console.error(error);
        });

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


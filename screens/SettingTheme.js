import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import SettingsList from 'react-native-settings-list';

export default class SettingTheme extends Component{
  constructor(){
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {switchValue: false};
  }
	render(){
		var bgColor = '#DCE3F4';

  	return(
      <View style={styles.container}>
        <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          <SettingsList.Header headerStyle={styles.headerStyle}/>
          <SettingsList.Item
            title='Light'
            hasNavArrow={false}
            //onPress={() => }
          />
          <SettingsList.Item
            title='Dark'
            hasNavArrow={false}
            //onPress={() => }
          />
        </SettingsList>
      </View>
		)
	}
  onValueChange(value){
    this.setState({switchValue: value});
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#EFEFF4'
  },
  headerStyle: {
    marginTop:15,
    marginLeft:15,
    color:'gray'
  }
})
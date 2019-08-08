import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, FlatList, Image, } from 'react-native';
import RankList from "../../components/Contest/IndividualRank/rankList"

export default class IndiRank extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.individual}>
                    <View style={styles.indiItemWrapper}>
                        <Image 
                            style={styles.indiIcon}
                            source={require('../../assets/contest_page/myrank.png')}
                        />
                        <Text style={styles.rank}>
                            Your rank:
                        </Text>
                    </View>
                    <View style={styles.indiItemWrapper}>
                        <Image 
                            style={styles.indiIcon}
                            source={require('../../assets/contest_page/mysteps.png')}
                        />
                        <Text style={styles.steps}>
                            Your steps:
                        </Text>
                    </View>
                </View>
                <View style={styles.titleBox}>
                    
                    <Text style={styles.Rank}>Rank</Text>
                    <Text style={styles.ID}>Username</Text>
                    <Text style={styles.Steps}>Steps</Text>

                </View>
                    
                <View style={styles.rankList}> 
                    
                    <RankList/>      
                
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: '#EEEEEE'
    },

    individual: {
        flex: 1.5,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: "stretch"
    },

    indiItemWrapper:{
        flex: 1,
        flexDirection:'column',
        backgroundColor:'#171D33',
        alignItems:'center',
        justifyContent: 'center'
    },

    titleBox: {
        flex: 0.5,
        backgroundColor: '#EBF6F7',
        flexDirection: "row",
        justifyContent: "space-between",
    },

    Rank: {
        flex:1,
        padding:15,
        textAlign: 'left',
        fontFamily: 'Gill Sans'
      },
    
    ID:{
        flex:6,
        textAlign: 'left',
        padding:15,
        fontFamily: 'Gill Sans'
    },
    
    Steps:{
        flex:1,
        padding:15,
        textAlign: 'right',
        fontFamily: 'Gill Sans'
    },

    rankList: {
        flex: 6,
    },

    indiIcon:{
        width: 65,
        height:65,
        alignSelf: 'center',
    },

    rank:{
        fontFamily: 'Gill Sans',
        color: 'white',
        fontSize: 22
    },
    
    steps:{
        fontFamily: 'Gill Sans',
        color: 'white',
        fontSize: 22
    }

});
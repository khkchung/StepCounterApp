import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { scale } from '../../Scaling';
class MemberInput extends Component {

    state =
        {
            memberID: 1,
            email: '',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'teammate'
        }

    componentDidMount() {

    }

    memberEmailChangedHandler = (val) => {
        this.setState({
            memberID: this.state.memberID,
            email: val,
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'teammate',
            status: 'inviting'
        });
    };

    memberSubmitHandler = () => {
        if (this.state.email.trim() === "") {
            return;
        }

        this.props.onMemberAdded(this.state);
        this.state.memberID += 1;
        console.log(this.state.memberID);
    };

    disableAdd = () => {
        return this.props.disableAdd
    }

    render() {
        return (
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.memberInput}
                    placeholder="Enter new member's email"
                    placeholderTextColor="rgba(64,64,64,0.5)"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType="go"
                    onChangeText={this.memberEmailChangedHandler}
                />

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={this.memberSubmitHandler}
                    color='white'
                    disabled={this.disableAdd()}
                >
                    <Text style={styles.addText}>Add</Text>
                </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({

    inputContainer: {
        flex: 0.4,
        width: "100%",
        flexDirection: "row",
        marginTop: scale(10),
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: scale(20),
    },

    memberInput: {
        backgroundColor: "white",
        width: "80%",
        height: scale(30),
        paddingHorizontal: scale(15),
        borderRadius: scale(6),
        marginHorizontal: scale(10),
        marginTop: scale(30)
    },

    addButton: {
        width: "20%",
        height: scale(30),
        backgroundColor: '#00BCD4',
        borderRadius: scale(5),
        marginHorizontal: scale(5),
        justifyContent: "center",
        alignItems: "center",
        marginTop: scale(30)
    },

    addText: {
        fontFamily: 'Gill Sans',
    },

})

export default MemberInput;

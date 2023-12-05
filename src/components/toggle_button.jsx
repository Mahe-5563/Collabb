import React, { useState } from "react";
import { SafeAreaView, Text, Pressable, ToastAndroid } from "react-native";
import { toggleButtons } from "../css/interactables";

function ToggleButtons() {
    const [isFollowing, setIsFollowing] = useState(false);
  return (
    <SafeAreaView>
        {isFollowing ?
            <Pressable
                style={toggleButtons.btnFollowing}
                onPress={() => {
                    ToastAndroid.show("This is just a development feature. This doesn't have any changes.", 5000);
                    setIsFollowing(false)
                }}
            >
                <Text
                    style={toggleButtons.btnFollowingTitle}
                >
                    Following
                </Text>
            </Pressable>
        :
            <Pressable
                style={toggleButtons.btnFollow}
                onPress={() => {
                    ToastAndroid.show("This is just a development feature. This doesn't have any changes.", 5000);
                    setIsFollowing(true)
                }}
            >
                <Text
                    style={toggleButtons.btnFollowTitle}
                >
                    Follow
                </Text>
            </Pressable>
        }
        
    </SafeAreaView>
  );
}

export default ToggleButtons;

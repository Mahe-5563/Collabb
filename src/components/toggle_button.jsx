import React, { useState } from "react";
import { SafeAreaView, Text, Pressable } from "react-native";
import { toggleButtons } from "../css/interactables";

function ToggleButtons() {
    const [isFollowing, setIsFollowing] = useState(false);
  return (
    <SafeAreaView>
        {isFollowing ?
            <Pressable
                style={toggleButtons.btnFollowing}
                onPress={() => setIsFollowing(false)}
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
                onPress={() => setIsFollowing(true)}
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

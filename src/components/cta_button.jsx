import React, { useEffect, useState } from "react";
import { SafeAreaView, Pressable, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { ctaButtons } from "../css/interactables";
import { colors } from "../css/colors";
import { marginBottom, marginLeft, marginRight, marginTop } from "../css/common";

function CTAButton(props) {
    const {
        title,
        onPress,
        icon,
        dark,
        isDisabled
    } = props;
    
    return (
        <SafeAreaView>
            <Pressable
                style={[
                    ctaButtons.ctaButtonComponent,
                    ...(dark ? 
                        isDisabled ? [ ctaButtons.ctaSecondaryComponentDisabled] 
                            : [ ctaButtons.ctaSecondaryComponent ] 
                        : isDisabled ? [ ctaButtons.ctaPrimaryComponentDisabled ] 
                            : [ctaButtons.ctaPrimaryComponent ])
                ]}
                android_ripple={{
                    color: dark ? colors.secondary_color_medium : colors.primary_color_medium
                }}
                onPress={onPress}
                disabled={isDisabled}
            >
                {icon && 
                    <FontAwesomeIcon 
                        icon={icon} 
                        size={24}
                        style={[
                            marginTop("auto").setMarginTop,
                            marginBottom("auto").setMarginBottom,
                            marginRight(10).setMarginRight
                        ]}
                        color={dark ? 
                            isDisabled ? colors.grey_color  : colors.primary_color 
                            : isDisabled ? colors.grey_color  : colors.secondary_color
                        }
                    />
                }
                <Text
                    style={[
                        ctaButtons.ctaButtonTitle,
                        ...(!icon ? [
                            marginRight("auto").setMarginRight,
                            marginLeft("auto").setMarginLeft
                        ] : []),
                        ...(dark ? 
                            isDisabled ? [ ctaButtons.ctaPrimaryTitleDisabled ] 
                                : [ctaButtons.ctaPrimaryTitle ] 
                            : isDisabled ? [ ctaButtons.ctaSecondaryTitleDisabled ] 
                                : [ ctaButtons.ctaSecondaryTitle ])
                    ]}
                    numberOfLines={1}
                >
                    {title}
                </Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default CTAButton;

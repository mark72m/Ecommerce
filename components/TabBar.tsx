import { View, Text, TouchableOpacity } from 'react-native'
import { BottomTabBarProps }  from '@react-navigation/bottom-tabs'
import  TabBarButton  from './TabBarButton'

export function TabBar({ state, descriptors, navigation } : BottomTabBarProps) {
    return (
        <View style={{flexDirection: 'row'}}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabBarButton 
                    key={route.key}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    isFocused={isFocused} 
                    label={label} 
                    routeName={route.name}/>
                );
            })}
        </View>
    );

}
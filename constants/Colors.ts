const tintColorLight = '#0C6157';
const tintColorDark = '#fff';
const bottomButton = '#27ea03';

const BaseThemeColor = '#0C6157';
const BaseThemeDarkText = '#34af98';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    bottomButtonIcon: bottomButton,
    //New Light Colors
    AppBackground: 'white',
    headerColor: BaseThemeColor,
    headerText: 'white',
    headerinActiveText: '#eaeaea9e',
    headerActiveText: 'white',
    headerIndicators: 'white',
    screenMainText: '#000',
    chatScreenTimeStamp: 'grey',
    screenFloationIconColor: BaseThemeDarkText,
    contactScreenIconColor: BaseThemeDarkText,
    inScreenBackgroundColor: '#e6e6e6',
    inScreenTextColor: '#717171',
    inputBackground: 'white',
    inputText: '#000',
    inputIconColor: 'gray',
    inputPlaceHolderColor: '#a9a9a9',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    bottomButtonIcon: bottomButton,
    //New Dark Colors
    AppBackground: '#101d24',
    headerColor: '#222d38',
    headerText: '#808b93',
    headerinActiveText: '#808b93',
    headerActiveText: BaseThemeDarkText,
    headerIndicators: BaseThemeDarkText,
    screenMainText: '#d3d7da',
    chatScreenTimeStamp: BaseThemeDarkText,
    screenFloationIconColor: BaseThemeDarkText,
    contactScreenIconColor: 'gray',
    inScreenBackgroundColor: '#101d24',
    inScreenTextColor: '#bfc2c3',
    inputBackground: '#2c373d',
    inputText: '#fff',
    inputIconColor: '#bfc2c3',
    inputPlaceHolderColor: '#757575',
  },
};

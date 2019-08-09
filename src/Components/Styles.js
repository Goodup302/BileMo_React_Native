import Color from "react-native-material-color";
import { StyleSheet } from "react-native"


const COLOR_PRIMARY = Color.AMBER[500];
const COLOR_PRIMARY_VARIANT = Color.AMBER[700];

const COLOR_SECONDARY = Color.BLUE[500];
const COLOR_SECONDARY_VARIANT = Color.BLUE[700];

const COLOR_BACKGROUND = Color.GREY[100];

const COLOR_ERROR = Color.RED[500];
const COLOR_ERROR_VARIANT = Color.RED[700];
export default StyleSheet.create({
    DARK_TEXT: {
        color: Color.BLACK['200'],
    },
    CLEAR_TEXT: {
        color: Color.WHITE['200'],
    },
});

import FarsiDatePicker from '@mohamadkh75/react-native-jalali-datepicker';
import { forwardRef, ReactNode, useRef } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { heightPercentageToDP } from 'react-native-responsive-screen';
import DateTimePicker from 'react-native-ui-datepicker';
import ColorSystem from '../../../configs/color/ColorSystem';
import { useAppSelector } from '../../../redux/hooks';
import DirectedView from "../../../translation/directedView";
import DateTimeHelper from '../../../utilities/DateTimeHelper';
import jalaliToGregorian from '../../../utilities/jalaliToGregorian';
import CGap from '../../atoms/CGap';
import CIconGenerator from '../../atoms/CIconGenerator';
import { CText } from '../../atoms/Ctext';
import { IText } from '../../atoms/Ctext/IText';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import { IStyle } from "../../utils/interfacesUI/IStyle";
import Xml from '../../utils/svgs/Xml';
import CModal from '../CModal';




export default forwardRef(({ date, onChange, title, style, picker, hideIcon, hideText, valueSetting }: IDatePicker, ref) => {
    const refModal = useRef<any>(ref)
    const _lang = useAppSelector((s) => s.langSlice.value)
    const _isFa = _lang === 'fa'

    const _onChange = (date?: string) => {
        onChange!(date);
        refModal.current.hide()
    };

    const _jalaliDateOnChange = (date?: string) => { _onChange(jalaliToGregorian(date)) }


    const _txt = () => {

        if (date) {
            if (_isFa) {
                return DateTimeHelper._dateToPersian(date).InPersian
            } else {
                return DateTimeHelper._formatDate(date)
            }
        } else {
            return '--/--/--'
        }

    }


    return (
        <>
            {title && <CText text={title} />}
            <DirectedView touchable event={{ onPress() { refModal.current.show() } }} style={style}>
                {!hideIcon && <CIconGenerator iconName={Xml.calender(ColorSystem.Border)} />}
                <CGap thick={5} />
                {!hideText && <CText {...valueSetting} text={_txt()} />}
                {/* {picker} */}
            </DirectedView>

            <CModal ref={refModal}>
                <DirectedView style={{ justifyContent: 'center' }}>

                    {!_isFa ?
                        <DateTimePicker
                            mode="single"
                            date={date}
                            onChange={(params: any) => { _onChange(params.date) }}
                        />
                        :
                        <FarsiDatePicker
                            selected='1399/1/18'
                            dateSeparator='/'
                            minDate='1398/1/18'
                            maxDate='1400/1/18'
                            style={defStyle.style}
                            headerContainerStyle={defStyle.headerContainerStyle}
                            yearMonthBoxStyle={defStyle.yearMonthBoxStyle}
                            yearMonthTextStyle={defStyle.yearMonthTextStyle}
                            iconContainerStyle={defStyle.iconContainerStyle}
                            backIconStyle={defStyle.backAndNextIconStyle}
                            nextIconStyle={defStyle.backAndNextIconStyle}
                            eachYearStyle={defStyle.eachYearStyle}
                            eachYearTextStyle={defStyle.eachYearTextStyle}
                            eachMonthStyle={defStyle.eachMonthStyle}
                            eachMonthTextStyle={defStyle.eachMonthTextStyle}
                            weekdaysContainerStyle={defStyle.weekdaysContainerStyle}
                            weekdayStyle={defStyle.weekdayStyle}
                            weekdayTextStyle={defStyle.weekdayTextStyle}
                            dayStyle={defStyle.dayStyle}
                            selectedDayStyle={defStyle.selectedDayStyle}

                            borderColor={ColorSystem.Primary}
                            dayTextStyle={{ fontSize: 18 }}
                            // selectedDayColor='#4bcffa'
                            // selectedDayTextColor='white'
                            // dayTextColor='#4bcffa'
                            // disabledTextColor='#4bcffa66'
                            onDateChange={(date: any) => _jalaliDateOnChange(date)}
                        />
                    }
                </DirectedView>
            </CModal>
        </>

    );
})

const defStyle = StyleSheet.create({
    headerContainerStyle: { height: '15%' },
    style: {
        // width: '95%',
        height: heightPercentageToDP(40),
        // alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // backgroundColor: '#1e272e',
        // borderWidth: 1,
        // borderColor: '#4bcffa',
        // borderRadius: 10,
        // elevation: 4
    },
    yearMonthBoxStyle: {
        width: '30%',
        height: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderRadius: 10
    },
    yearMonthTextStyle: {
        fontSize: EnumFontSize.h2,
        // color: '#4bcffa'
    },
    iconContainerStyle: { width: `${100 / 7}%` },
    backAndNextIconStyle: {
        width: EnumFontSize.h3,
        height: EnumFontSize.h3,
        resizeMode: 'center',
        // tintColor: '#808e9b'
    },
    // nextIconStyle: {
    //     width: 20,
    //     height: 20,
    //     resizeMode: 'center',
    //     // tintColor: '#4bcffa'
    // },
    eachYearStyle: {
        width: 110,
        height: 82,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#4bcffa',
        marginTop: '1.5%',
        marginBottom: 5,
        marginHorizontal: '1.5%',
        borderRadius: 10,
        elevation: 3
    },
    eachYearTextStyle: {
        fontSize: 16,
        color: 'white'
    },
    eachMonthStyle: {
        width: `${88 / 3}%`,
        height: `${88 / 4}%`,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#4bcffa',
        marginBottom: '3%',
        borderRadius: 10,
        elevation: 3
    },
    eachMonthTextStyle: {
        fontSize: 16,
        // color: 'white'
    },
    weekdaysContainerStyle: { height: '10%' },
    weekdayStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    weekdayTextStyle: {
        fontSize: 16,
        // color: '#808e9b',
        marginBottom: 5
    },
    dayStyle: {
        width: `${100 / 7}%`,
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1 / 1
    },
    selectedDayStyle: {
        width: '70%',
        aspectRatio: 1 / 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },

})


export type TMode = 'date' | 'time'
export interface IDatePicker extends IStyle<ViewStyle> {
    onChange?: (date?: string) => void;
    title?: string;
    date?: string;
    picker?: ReactNode | ReactNode[];
    hideIcon?: boolean;
    hideText?: boolean;
    valueSetting?: IText;
}
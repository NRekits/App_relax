import React from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
LocaleConfig.locales['mx'] = {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb'],
    today: ['']
}
LocaleConfig.defaultLocale = 'mx';
import {Container}  from 'native-base';
import {isDefined, ESTADOS_COLOR} from './../CommonFunctions';


const TRIUNFOS_COLOR = {
    "Meditación sin pausa": "#7c7b89",
    "Completaste 5 meditaciones": "#4e4423"
};
export default class Calendario extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            estados: {}
        };
    }
    componentDidMount(){
        let copy = {}
        this.props.estados.forEach((item, index) => {
            Object.assign(this.state.estados, copy);
            let DotTriunfos = [];

            if (item && isDefined(item.triunfos)){
                item.triunfos.forEach((item) => {
                    DotTriunfos.push({key:`${item.nombre}`, color: TRIUNFOS_COLOR[`${item.nombre}`]});
                })
            }

            copy[`${item.fecha}`] = {selected: true, selectedColor: ESTADOS_COLOR[item.nombre], dots: [...DotTriunfos]};
            this.setState({estados: copy});
        });
    }
    render(){
        return (
            <Container style={{height: 400}}>
                <Calendar
                    onDayPress={(day) => {this.props.pickUpDate(day)}}
                    markedDates={this.state.estados}
                    markingType={'multi-dot'}
                />
            </Container>
        );
    }
}
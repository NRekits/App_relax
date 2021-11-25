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

export default class Calendario extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            estados: {},
            idInterval: undefined
        };
    }

    componentDidMount(){
        this.getStatesFromProps();

        //esta es una solución temporal pero no sigue las prácticas de React para actualizar los datos, quedo en tus manos Nicole y Hugo del futuro
        //El componente calendario debería hacer fetch de los estados del mes y que se actualice solo
        //Por lo que este componente solo debería recibir el id del usuario para realizarlo
        //Inicio del código
        this.setState({idInterval: setInterval( () => {
            this.getStatesFromProps()
        }, 1000)});
        //Fin del código

    }
    getStatesFromProps(){
        let copy = {}
        this.props.estados.forEach((item, index) => {
            Object.assign(this.state.estados, copy);
            let fecha = new Date(item.fecha);
            let Year = fecha.getFullYear();
            let Month = fecha.getMonth() + 1;
            let Day = fecha.getDate();
            if(Day < 10){
                Day = `0${Day}`;
            }
            if(Month < 10){
                Month = `0${Month}`;
            }
            copy[`${Year}-${Month}-${Day}`] = {selected: true, selectedColor: ESTADOS_COLOR[item.nombre]};
            this.setState({estados: copy});
        });
    }
    componentWillUnmount(){
        clearInterval(this.state.idInterval);
    }
    shouldComponentUpdate(prevProps, prevState){
        return this.props.estados.length != prevProps.estados.lenght;
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
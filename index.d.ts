import React from 'react';
import nouislider from 'nouislider'

declare module "react-nouislider" {
    export interface IPipesInterface {
        mode: string
        stepped: boolean
        density: any
    }

    export interface IRange {
        min: Array<any | Number>
        max: Array<any | Number>
    }

    export interface INouisliderProps {
        /**
         * Slider range. Required!
         */
        range: IRange

        /**
         * Slider start position. Required!
         */
        start: Array<Number> | Number

        step?: Array<Number> | Number
        behaviour?: string
        connect?: Array<boolean>
        tooltips?: Array<any>
        cssPrefix?: string
        pips?: IPipesInterface | any

        onUpdate?: any
        onChange?: any
        onSlide?: any
        onStart?: any
        onEnd?: any
        onSet?: any
    }

    export interface INouisliderState {
    }

    class Nouislider extends React.Component<INouisliderProps, INouisliderState> {
        constructor();

        createSlider(): void;
    }

    export default Nouislider;
}
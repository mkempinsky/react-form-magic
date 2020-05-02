import React, {useEffect} from 'react';
import {blue} from '../../lib/styles';
import PropTypes from 'prop-types';
import {render} from 'enzyme';

const Button = (props) => {
    const {className = '', children, style = {}, overrides = {}} = props;
    const {className: jsxClassName = '', styles: overrideStyles = ''} = overrides;

    return (
        <button
            {...props}
            className={`${className} ${jsxClassName}`}
            style={{opacity: props.disabled ? '0.65' : 1, ...style}}>
            {children}
            <style jsx>{`
                button,
                button::after {
                    -webkit-transition: all 0.3s;
                    -moz-transition: all 0.3s;
                    -o-transition: all 0.3s;
                    transition: all 0.3s;
                }
                button {
                    min-width: auto;
                    border-radius: 4px;
                    border: 2px solid ${blue()};
                    color: ${blue(600)};
                    font-size: 16px;
                    padding: 15px 30px;
                    cursor: pointer;
                }
                button:hover,
                button:active {
                    transition: all 0.25s;
                }
                button:hover {
                    background: ${blue(300)};
                }
                button:active {
                    background: ${blue(200)};
                }
                button:focus {
                    outline: 0;
                }
            `}</style>
            {overrideStyles}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    overrides: PropTypes.object,
};

export default Button;

import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const CheckboxInput = styled.input`
    opacity: 0;
	position: absolute;
`;

export const Label = styled.label`
    background-color: #111;
	border-radius: 50px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	position: relative;
	height: 26px;
	width: 52px;
	transform: scale(1.2);
`;

export const BallMoon = styled.div`
    background-color: #fff;
	border-radius: 50%;
	position: absolute;
	top: 2px;
	left: 2px;
	height: 22px;
	width: 22px;
	transform: translateX(26px);
	transition: transform 0.2s linear;
`;

export const BallSun = styled(BallMoon)`
    transform: translateX(0px);
`;

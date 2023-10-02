import PropTypes from 'prop-types';

// 대문자로 시작하는 변수로 컴포넌트를 정의한다.
// 소문자일 경우 제대로 export 되지 않는다.
const MyComponent = p => {
    console.log(p);
    return <div>{p.name} </div>;
};

MyComponent.defaultProps = {
    name: null,
    sex: null,
    children: null
};

MyComponent.propTypes = {
    name: PropTypes.number
}

export default MyComponent;
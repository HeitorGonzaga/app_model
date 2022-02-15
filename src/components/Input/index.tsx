import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Alert, TextInputProps, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, InputField, Icon } from './styles';

interface InputPropos extends TextInputProps {
  icon: string;
  evento?: {():void};
  possuiEvento?: boolean;
  iconEvento?: string;
  isLoading?:boolean;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputPropos> = (
  { icon, evento, possuiEvento=false, iconEvento, isLoading=false, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }),[inputElementRef]);

  const _handleInputFocus = () => {
    setIsFocused(true);
  };

  const _hanleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!rest.value);
  };

  return (
    <Container isFocused={isFocused} lines={rest.numberOfLines}>
      {/*rest.numberOfLines > 0 ? null : (
        <Icon name={icon} size={20} color={'#fff'} />
      )*/}
      {
        (
          <Icon name={icon} size={20} color={'black'} />
        )
      }
      <InputField
        ref={inputElementRef}
        placeholderTextColor='#B5B1B1'
        {...rest}
        onFocus={_handleInputFocus}
        onBlur={_hanleInputBlur}
      />
      {
        possuiEvento==true?isLoading===false?<TouchableOpacity style={{height:50, width:40, justifyContent:'center', alignItems:'center'}} onPress={()=>evento==undefined?null:evento()}><Icon name={iconEvento} size={20} color={'black'} /></TouchableOpacity>:<ActivityIndicator color={'#121110'} size={20}/>:isLoading===true?<ActivityIndicator color={'#121110'} size={20}/>:null
      }
    </Container>
  );
};

export default forwardRef(Input);

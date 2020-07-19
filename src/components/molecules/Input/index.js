import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {
  IconAccountCircle,
  IconEmail,
  IconHandphone,
  IconPassword,
} from '../../../assets';
import {colors} from '../../../utils';

const Input = ({
  placeholder,
  icon,
  secureTextEntry,
  keyboardType,
  value,
  onChangeText,
}) => {
  const [border, setBorder] = useState(colors.border2);

  const onFocusForm = () => {
    setBorder(colors.primary);
  };

  const onBlurForm = () => {
    setBorder(colors.border2);
  };

  const Icon = () => {
    switch (icon) {
      case 'account':
        return <IconAccountCircle style={styles.icon} />;
      case 'password':
        return <IconPassword style={styles.icon} />;
      case 'email':
        return <IconEmail style={styles.icon} />;
      case 'handphone':
        return <IconHandphone style={styles.icon} />;
      case 'password':
        return <IconPassword style={styles.icon} />;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
      <Icon />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  input: (border) => ({
    backgroundColor: colors.white,
    borderBottomColor: border,
    borderBottomWidth: 1,
    padding: 12,
  }),
  icon: {
    position: 'absolute',
    right: 15,
    bottom: 12,
  },
});

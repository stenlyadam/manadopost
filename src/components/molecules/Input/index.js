import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {
  IconAccountCircle,
  IconEmail,
  IconHandphone,
  IconPassword,
} from '../../../assets';
import {colors} from '../../../utils';

const Input = ({placeholder, icon, secureTextEntry}) => {
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
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
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
  input: {
    backgroundColor: colors.white,
    borderBottomColor: colors.border2,
    borderBottomWidth: 1,
    padding: 12,
  },
  icon: {
    position: 'absolute',
    right: 15,
    bottom: 12,
  },
});

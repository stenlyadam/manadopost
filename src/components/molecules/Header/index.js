import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ILLogoPNG, ILNullPhotoPNG} from '../../../assets';
import {colors, getData} from '../../../utils';
import {Button, Gap} from '../../atoms';
import {useSelector} from 'react-redux';

const Header = ({
  onPressBack,
  onPressMenu,
  onPressSearch,
  onPressShare,
  onPressUserProfile,
  type,
}) => {
  const login = useSelector((state) => state.login);
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    photo: ILNullPhotoPNG,
  });

  useEffect(() => {
    if (login) {
      getData('user').then((res) => {
        const data = res;
        data.photo = {uri: res.photo};
        setProfile(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (type === 'logo-only') {
    return (
      <View style={styles.container}>
        <View style={styles.logoOnly}>
          <View style={styles.logoWrapper}>
            <Image source={ILLogoPNG} />
          </View>
        </View>
      </View>
    );
  }
  if (type === 'logo-profile') {
    return (
      <View style={styles.container}>
        <View style={styles.logoOnly}>
          <View style={styles.logoWrapper}>
            <Image source={ILLogoPNG} />
          </View>
          <TouchableOpacity onPress={onPressUserProfile}>
            <Image source={profile.photo} style={styles.nullPhoto} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  if (type === 'article') {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Button type="icon-only" icon="arrow-back" onPress={onPressBack} />
          <View style={styles.logoWrapper}>
            <Image source={ILLogoPNG} />
          </View>
          <Button type="icon-only" icon="share" onPress={onPressShare} />
        </View>
        <Gap height={2} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Button type="icon-only" icon="menu" onPress={onPressMenu} />
        <View style={styles.logoWrapper}>
          <Image source={ILLogoPNG} />
        </View>
        <Button type="icon-only" icon="search" onPress={onPressSearch} />
      </View>
      <Gap height={2} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
  logo: {
    backgroundColor: colors.primary,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  logoOnly: {
    backgroundColor: colors.primary,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingLeft: 22,
  },
  nullPhoto: {
    height: 32,
    width: 32,
    borderRadius: 42 / 2,
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'center',
    marginRight: -10,
  },
});

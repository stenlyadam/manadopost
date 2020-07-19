import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {fonts, colors} from '../../../utils';
import {IconCalenderGrey} from '../../../assets';

const index = ({title, search, onPress}) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{title}</Text>
      {search && (
        <View style={styles.search}>
          <View style={styles.searchBox}>
            <Text style={styles.searchText}>Cari Edisi</Text>
          </View>
          <TouchableOpacity onPress={onPress}>
            <IconCalenderGrey />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  title: {
    backgroundColor: colors.tertiary,
    paddingHorizontal: 12,
    paddingVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    width: 117,
    height: 16,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  searchText: {
    fontFamily: fonts.primary[600],
    fontSize: 10,
    color: colors.text.primary,
  },
});

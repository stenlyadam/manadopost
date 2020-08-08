import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {fonts, colors} from '../../../utils';
import {IconCalenderGrey} from '../../../assets';

const index = ({title, search, onPress, secondary}) => {
  return (
    <View style={styles.container(secondary)}>
      <Text style={styles.titleText(secondary)}>{title}</Text>
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
  container: (secondary) => ({
    backgroundColor: secondary ? colors.cardBackground : colors.tertiary,
    paddingHorizontal: 12,
    paddingVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  titleText: (secondary) => ({
    color: secondary ? colors.text.fourth : colors.white,
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: fonts.primary[800],
  }),

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

/* eslint-disable react-hooks/rules-of-hooks */
import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {Loading, NewsItem, Title} from '../../components';
import {colors, formatDate} from '../../utils';

const index = ({navigation, route}) => {
  const {category, title} = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [filterdNews, setFilteredNews] = useState([]);

  const onChangeSearch = (query) => {
    setLoading(true);
    setSearchQuery(query);
    const filterArticle = news.filter((item) => {
      return item.title.rendered.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredNews(filterArticle);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getNews().then((res) => {
      setNews(res);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNews = async () => {
    let url = `https://manadopost.jawapos.com/wp-json/wp/v2/posts?per_page=100&categories=${category}`;
    const response = await Axios.get(url);
    return response.data;
  };

  return (
    <>
      <View style={styles.screen}>
        <Title title={`Pencarian ${title}`} />
        <Searchbar
          placeholder="Cari berita"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        {filterdNews.map((item) => {
          const data = {
            image: item.jetpack_featured_media_url,
            title: item.title.rendered,
            date: item.date,
            desc: item.excerpt.rendered,
            content: item.content.rendered,
            related: item['jetpack-related-posts'],
            link: item.link,
          };
          return (
            <NewsItem
              type="no-image"
              key={item.id}
              image={{uri: item.jetpack_featured_media_url}}
              title={item.title.rendered}
              date={formatDate(item.date)}
              onPress={() => navigation.navigate('Article', data)}
            />
          );
        })}
        {loading && <Loading />}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-start',
    borderRadius: 5,
  },
});

export default index;

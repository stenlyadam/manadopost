/* eslint-disable react-hooks/exhaustive-deps */
import Axios from 'axios';
import Moment from 'moment';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  Ads,
  CovidCard,
  Header,
  Headline,
  Loading,
  Menu,
  NewsItem,
  Title,
} from '../../components';
import {colors, fonts} from '../../utils';

const Homepage = ({navigation, route}) => {
  const [news, setNews] = useState([]);
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [confirmedSulut, setConfirmedSulut] = useState(0);
  const [recoveredSulut, setRecoveredSulut] = useState(0);
  const [deathsSulut, setDeathsSulut] = useState(0);
  const [lastUpdateCovid, setLastUpdateCovid] = useState('');
  const [headlines, setHeadlines] = useState([]);
  const [articleAds, setArticleAds] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const {category, title = 'Beranda'} = route.params;

  const mergeNewsWithAds = (newsArray, adsArray) => {
    let count = 0;

    for (let i = 0; i < newsArray.length; i++) {
      if (i % 3 === 0) {
        //max ads 33
        if (count === adsArray.length) {
          break;
        }
        newsArray.splice(i, 0, adsArray[count]);
        count++;
      }
    }

    //Remove undefined
    let filteredData = newsArray.filter((el) => {
      return el !== undefined;
    });

    return filteredData;
  };

  const getCovidDataSulut = async () => {
    let url = 'https://indonesia-covid-19.mathdro.id/api/provinsi';
    const response = await Axios.get(url);
    let filteredData = response.data.data.filter((el) => {
      return el.provinsi === 'Sulawesi Utara';
    });
    return filteredData;
  };

  const getCovidDataID = async () => {
    let url = 'https://covid19.mathdro.id/api/countries/ID';
    const response = await Axios.get(url);
    return response.data;
  };

  const getHeadlines = async (newsCategory) => {
    let url = `https://manadopost.jawapos.com/wp-json/wp/v2/posts?per_page=7&categories=${newsCategory}`;
    const response = await Axios.get(url);
    return response.data;
  };

  const getNews = async () => {
    let url = 'https://manadopost.jawapos.com/wp-json/wp/v2/posts?per_page=100';
    const response = await Axios.get(url);
    let filteredNews = response.data.filter((el) => {
      //Berita utama tidak ditampilkan di berita terbaru
      return el.categories[0] !== 129;
    });
    return filteredNews;
  };

  const getAds = async () => {
    let url = 'http://api.mpdigital.id/ads';
    const response = await Axios.get(url);
    if (response.data) {
      let filteredAds = response.data.filter((el) => {
        if (el.isActive === '1') {
          return el.category === title && el.article === '0';
        }
      });
      return filteredAds;
    }
    return response.data;
  };

  const getArticleAds = async () => {
    let url = 'http://api.mpdigital.id/ads';
    const response = await Axios.get(url);
    if (response.data) {
      let filteredAds = response.data.filter((el) => {
        if (el.isActive === '1') {
          return el.category === title && el.article === '1';
        }
      });
      return filteredAds;
    }
    return response.data;
  };

  const getAllFilteredData = async () => {
    const resHeadlines = await getHeadlines(category);
    const resNews = await getNews();
    const resAds = await getAds();
    const mergedData = mergeNewsWithAds(resNews, resAds);
    const resArticle = await getArticleAds();
    return [mergedData, resArticle, resHeadlines];
  };

  useEffect(() => {
    let mounted = true;
    setRefreshing(true);
    getCovidDataID().then((res) => {
      setConfirmed(res.confirmed.value);
      setRecovered(res.recovered.value);
      setDeaths(res.deaths.value);
      setLastUpdateCovid(res.lastUpdate);
    });
    getCovidDataSulut().then((res) => {
      setConfirmedSulut(res[0].kasusPosi);
      setRecoveredSulut(res[0].kasusSemb);
      setDeathsSulut(res[0].kasusMeni);
    });
    getAllFilteredData().then(([newsData, articlesData, headlinesData]) => {
      if (mounted) {
        setNews(newsData);
        setArticleAds(articlesData);
        setHeadlines(headlinesData);
        setRefreshing(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getAllFilteredData().then(([newsData, articlesData, headlinesData]) => {
      setNews(newsData);
      setArticleAds(articlesData);
      setHeadlines(headlinesData);
      setRefreshing(false);
    });
  };

  return (
    <View style={styles.screens}>
      <View style={styles.headerWrapper}>
        <Header
          onPressMenu={() => navigation.openDrawer()}
          onPressSearch={() =>
            navigation.navigate('Search', {category: category, title: title})
          }
        />
        <Menu navigation={navigation} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {!refreshing && (
          <Title title="Berita Utama" refresh onPress={onRefresh} />
        )}
        <Swiper
          style={styles.headlineWrapper}
          height={'60%'}
          showsButtons={true}>
          {headlines.map((item) => {
            const data = {
              image: item.jetpack_featured_media_url,
              title: item.title.rendered,
              date: item.date,
              desc: item.excerpt.rendered,
              content: item.content.rendered,
              related: item['jetpack-related-posts'],
              category: item.categories[0],
              link: item.link,
              ads: articleAds,
            };
            return (
              <View key={item.id}>
                <Headline
                  image={{uri: data.image}}
                  title={data.title}
                  // date={formatDate(data.date)}
                  onPress={() => navigation.navigate('Article', data)}
                />
              </View>
            );
          })}
        </Swiper>
        {!refreshing && (
          <View style={styles.containerCovid}>
            <View style={styles.headerCovid}>
              <Text style={styles.titleCovid}>
                Update Data COVID-19 di Indonesia
              </Text>
              <Text style={styles.titleCovid}>
                {Moment(lastUpdateCovid).format('LL')}
              </Text>
            </View>
            <View style={styles.contentCovid}>
              <CovidCard
                category="Positif"
                value={confirmed}
                textColor={colors.covid.positif}
              />
              <CovidCard
                category="Sembuh"
                value={recovered}
                textColor={colors.covid.sembuh}
              />
              <CovidCard
                category="Meninggal"
                value={deaths}
                textColor={colors.covid.meninggal}
              />
            </View>
            <Text style={styles.titleCovid}>Update Data COVID-19 di Sulut</Text>
            <View style={styles.contentCovid}>
              <CovidCard
                value={confirmedSulut}
                category="Positif"
                textColor={colors.covid.positif}
              />
              <CovidCard
                value={recoveredSulut}
                category="Sembuh"
                textColor={colors.covid.sembuh}
              />
              <CovidCard
                value={deathsSulut}
                category="Meninggal"
                textColor={colors.covid.meninggal}
              />
            </View>
          </View>
        )}
        {!refreshing && <Title title="Berita Terbaru" secondary />}
        <View>
          {news.map((item, index) => {
            //Kondisi jika akan menampilkan iklan
            if (item.category) {
              return (
                <Ads
                  key={item.id}
                  title={item.category}
                  image={{uri: item.image}}
                  type={item.type}
                />
              );
            } else {
              //Kondisi jika akan menampilkan berita
              const data = {
                image: item.jetpack_featured_media_url,
                title: item.title.rendered,
                date: item.date,
                desc: item.excerpt.rendered,
                content: item.content.rendered,
                related: item['jetpack-related-posts'],
                link: item.link,
                category: item.categories[0],
                ads: articleAds,
              };
              return (
                <NewsItem
                  key={item.id}
                  image={{uri: item.jetpack_featured_media_url}}
                  title={item.title.rendered}
                  // date={formatDate(item.date)}
                  ads={data.ads}
                  category={item.categories[0]}
                  onPress={() => navigation.navigate('Article', data)}
                />
              );
            }
          })}
        </View>
      </ScrollView>
      {refreshing && <Loading />}
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  screens: {
    backgroundColor: colors.white,
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: colors.secondary,
  },
  title: {
    backgroundColor: colors.tertiary,
    paddingLeft: 12,
    paddingVertical: 7,
  },
  titleText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  headline: {
    flexDirection: 'row',
  },
  containerCovid: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  headerCovid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentCovid: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  titleCovid: {
    paddingVertical: 10,
    fontFamily: fonts.primary[600],
    fontSize: 12,
  },
});

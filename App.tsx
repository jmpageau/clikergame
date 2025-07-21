/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

interface Monster {
  id: string;
  name: string;
  family: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
}

interface Family {
  name: string;
  totalXP: number;
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // Initialize starter monster
  const [selectedMonster, setSelectedMonster] = useState<Monster>({
    id: '1',
    name: 'Fire Drake',
    family: 'Dragon',
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
  });

  const [families, setFamilies] = useState<{[key: string]: Family}>({
    Dragon: {name: 'Dragon', totalXP: 0},
  });

  const [workers, setWorkers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (workers > 0) {
        gainXP(workers);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [workers, selectedMonster]);

  const gainXP = (amount: number) => {
    const newXP = selectedMonster.xp + amount;
    let newLevel = selectedMonster.level;
    let remainingXP = newXP;
    let newXpToNext = selectedMonster.xpToNextLevel;

    // Check for level ups
    while (remainingXP >= newXpToNext && newLevel < 100) {
      remainingXP -= newXpToNext;
      newLevel++;
      newXpToNext = 100 * newLevel;
    }

    setSelectedMonster(prev => ({
      ...prev,
      level: newLevel,
      xp: remainingXP,
      xpToNextLevel: newXpToNext,
    }));

    setFamilies(prev => ({
      ...prev,
      [selectedMonster.family]: {
        ...prev[selectedMonster.family],
        totalXP: prev[selectedMonster.family].totalXP + amount,
      },
    }));
  };

  const buyWorker = () => {
    const cost = 100;
    if (families[selectedMonster.family].totalXP >= cost) {
      setFamilies(prev => ({
        ...prev,
        [selectedMonster.family]: {
          ...prev[selectedMonster.family],
          totalXP: prev[selectedMonster.family].totalXP - cost,
        },
      }));
      setWorkers(workers + 1);
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const xpPercentage = (selectedMonster.xp / selectedMonster.xpToNextLevel) * 100;

  return (
    <SafeAreaView style={{...backgroundStyle, flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.gameContainer}>
        {/* Monster Display */}
        <View style={styles.monsterContainer}>
          <Text style={[styles.monsterName, {color: isDarkMode ? Colors.white : Colors.black}]}>
            {selectedMonster.name}
          </Text>
          <Text style={[styles.monsterFamily, {color: isDarkMode ? Colors.light : Colors.dark}]}>
            {selectedMonster.family} Family
          </Text>

          {/* Monster Image - placeholder for now */}
          <TouchableOpacity style={styles.monsterImage} onPress={() => gainXP(1)}>
            <Text style={styles.monsterEmoji}>🐉</Text>
          </TouchableOpacity>

          <Text style={[styles.levelText, {color: isDarkMode ? Colors.white : Colors.black}]}>
            Level {selectedMonster.level}
          </Text>

          {/* XP Bar */}
          <View style={styles.xpBarContainer}>
            <View style={[styles.xpBarBackground, {backgroundColor: isDarkMode ? Colors.dark : Colors.lighter}]}>
              <View style={[styles.xpBarFill, {width: `${xpPercentage}%`}]} />
            </View>
            <Text style={[styles.xpText, {color: isDarkMode ? Colors.white : Colors.black}]}>
              {selectedMonster.xp} / {selectedMonster.xpToNextLevel} XP
            </Text>
          </View>
        </View>

        {/* Family Stats */}
        <View style={styles.statsContainer}>
          <Text style={[styles.statsText, {color: isDarkMode ? Colors.white : Colors.black}]}>
            {selectedMonster.family} Family XP: {families[selectedMonster.family].totalXP}
          </Text>
          <Text style={[styles.statsText, {color: isDarkMode ? Colors.white : Colors.black}]}>
            Workers: {workers}
          </Text>
        </View>

        {/* Shop */}
        <View style={styles.shopContainer}>
          <Button
            title={`Buy Worker (${100} ${selectedMonster.family} XP)`}
            onPress={buyWorker}
            disabled={families[selectedMonster.family].totalXP < 100}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  monsterContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  monsterName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  monsterFamily: {
    fontSize: 18,
    marginBottom: 20,
  },
  monsterImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#ff6b6b',
  },
  monsterEmoji: {
    fontSize: 80,
  },
  levelText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  xpBarContainer: {
    width: 250,
    alignItems: 'center',
  },
  xpBarBackground: {
    width: '100%',
    height: 20,
    borderRadius: 10,
    marginBottom: 5,
    overflow: 'hidden',
  },
  xpBarFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  xpText: {
    fontSize: 14,
  },
  statsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  statsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  shopContainer: {
    width: '80%',
  },
});

export default App;

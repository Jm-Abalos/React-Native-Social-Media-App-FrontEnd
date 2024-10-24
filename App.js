import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SocialMediaApp = () => {
  const [currentView, setCurrentView] = useState('home');
  
  const samplePosts = [
    {
      id: 1,
      author: "Mariana Lopez",
      timeAgo: "38 min ago",
      image: "https://picsum.photos/400",
      likes: 239,
      comments: 8
    }
  ];

  const topUsers = [
    { id: 1, name: "Johnnie", avatar: "https://picsum.photos/48" },
    { id: 2, name: "Melanie", avatar: "https://picsum.photos/48" },
    { id: 3, name: "Morgan", avatar: "https://picsum.photos/48" },
    { id: 4, name: "Lauren", avatar: "https://picsum.photos/48" }
  ];

  const renderDots = () => {
    return Array(20).fill(0).map((_, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          {
            top: Math.random() * 200,
            left: Math.random() * Dimensions.get('window').width,
          }
        ]}
      />
    ));
  };

  const BottomNav = () => (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => setCurrentView('home')}>
        <Feather 
          name="home" 
          size={24} 
          color={currentView === 'home' ? '#6B46C1' : '#666'} 
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="heart" size={24} color="#666" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton}>
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="search" size={24} color="#666" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCurrentView('profile')}>
        <Feather 
          name="user" 
          size={24} 
          color={currentView === 'profile' ? '#6B46C1' : '#666'} 
        />
      </TouchableOpacity>
    </View>
  );

  const HomeView = () => (
    <SafeAreaView style={styles.container}>
     {renderDots()}
      <View style={styles.header}>
      <TouchableOpacity>
          <Feather name="bell" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity>
          <Feather name="more-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.topUsersSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top 20 today</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.topUsersList}>
            {topUsers.map(user => (
              <View key={user.id} style={styles.topUserItem}>
                <Image source={{ uri: user.avatar }} style={styles.topUserAvatar} />
                <Text style={styles.topUserName}>{user.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tab}>
            <Text style={[styles.tabText, styles.activeTab]}>Recent Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Most Popular</Text>
          </TouchableOpacity>
        </View>

        {samplePosts.map(post => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image source={{ uri: post.image }} style={styles.authorAvatar} />
              <View>
                <Text style={styles.authorName}>{post.author}</Text>
                <Text style={styles.timeAgo}>{post.timeAgo}</Text>
              </View>
            </View>
            <Image source={{ uri: post.image }} style={styles.postImage} />
            <View style={styles.postFooter}>
              <View style={styles.engagementSection}>
                <Feather name="heart" size={24} color="#666" />
                <Text style={styles.engagementText}>{post.likes}</Text>
                <Feather name="message-circle" size={24} color="#666" />
                <Text style={styles.engagementText}>{post.comments} comments</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );

  const ProfileView = () => {
    const profileData = {
      name: "Jose Marie\nAbalos",
      posts: 76,
      followers: 293,
      following: 38,
      recentPosts: [
        { id: 1, image: "https://picsum.photos/150" },
        { id: 2, image: "https://picsum.photos/150" }
      ]
    };

    return (
      <SafeAreaView style={styles.container}>
        {renderDots()}
        
        <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="bell" size={24} color="white" />
        </TouchableOpacity>
          <Text style={styles.headerTitle}>My Profile</Text>
          <TouchableOpacity>
            <Feather name="more-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
      <ScrollView>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={styles.profileName}>{profileData.name}</Text>
        </View>
      
        <View style={styles.profileCard}>
          <Image 
            source={{ uri: "https://picsum.photos/150" }}
            style={styles.profileImage}
          />
          
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{profileData.posts}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            
            <View style={[styles.statItem, styles.statBadge]}>
              <Text style={styles.statNumber}>{profileData.followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>7</Text>
              </View>
            </View>
            
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{profileData.following}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>

          <View style={styles.postsSection}>
            <View style={styles.postsSectionHeader}>
              <Text style={styles.postsSectionTitle}>My Posts</Text>
              <View style={styles.viewOptions}>
                <TouchableOpacity>
                  <Feather name="square" size={20} color="#A9A9A9" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="grid" size={20} color="#666" />
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.postsGrid}>
              {profileData.recentPosts.map(post => (
                <Image
                  key={post.id}
                  source={{ uri: post.image }}
                  style={styles.gridImage}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
        <BottomNav />
      </SafeAreaView>
    );
  };

  return currentView === 'home' ? <HomeView /> : <ProfileView />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B46C1',
  },
  dot: {
    position: 'absolute',
    width: 4,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTitle: {
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  topUsersSection: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAllButton: {
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0', 
    padding: 10,              
    borderRadius: 8,           
    textAlign: 'center', 
  },
  topUsersList: {
    flexDirection: 'row',
  },
  topUserItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  topUserAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  topUserName: {
    fontSize: 12,
    marginTop: 4,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#000',
  },
  postCard: {
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  authorAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  authorName: {
    fontWeight: '600',
  },
  timeAgo: {
    fontSize: 12,
    color: '#666',
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 20,
  },
  postFooter: {
    marginTop: 8,
  },
  engagementSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  engagementText: {
    marginLeft: 8,
    marginRight: 16,
    color: '#666',
  },
  welcomeSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  profileName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  profileCard: {
    marginTop: 24,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statBadge: {
    position: 'relative',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#6B46C1',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  postsSection: {
    marginTop: 20,
  },
  postsSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  postsSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  viewOptions: {
    flexDirection: 'row',
    gap: 16,
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  gridImage: {
    width: (Dimensions.get('window').width - 60) / 2,
    height: (Dimensions.get('window').width - 60) / 2,
    borderRadius: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: 30,
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
  },
  addButton: {
    backgroundColor: '#6B46C1',
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
  },
});

export default SocialMediaApp;

import type { StaticImageData } from 'next/image';
import UcIcon from '@/assets/images/uc-image.webp';
import VpIcon from '@/assets/images/valorant.png';
import PbIcon from '@/assets/images/point-blank.png';
import SteamIcon from '@/assets/images/steam.png';
import TiktokIcon from '@/assets/images/tiktok-coin.webp';
import PubgUc from '@/assets/images/categories/Pubg-Uc.jpg';
import PubgPrime from '@/assets/images/categories/Pubg-Prime.jpg';
import ValorantTr from '@/assets/images/categories/Valorant-TR.jpg';
import ValorantEu from '@/assets/images/categories/Valorant-EU.jpg';
import PointBlank from '@/assets/images/categories/PointBlank.jpg';
import SteamWallet from '@/assets/images/categories/Steam.jpg';
import TiktokCoins from '@/assets/images/categories/TikTok.jpg';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  rating?: number;
}

export interface Game {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  icon: StaticImageData;
  products: Product[];
  mostUsed: boolean;
  gameRating?: number;
}

export const gamesData: Game[] = [
  {
    id: 1,
    name: 'PUBG Mobile - UC ID',
    description:
      'PUBG Mobile dünyada ən məşhur battle royale oyunlarından biridir. 100 oyunçu ilə böyük adada sağ qalan sonuncu olmaq üçün mübarizə aparın. Realistik silahlar, müxtəlif transport vasitələri və əla qrafika ilə həyəcanlı oyun təcrübəsi yaşayın. UC (Unknown Cash) ilə oyundaxili əşyalar, kostyumlar və premium keçidlər əldə edin.',
    image: PubgUc,
    icon: UcIcon,
    products: [
      {
        id: 1,
        title: '30 UC',
        price: 0.98,
        description:
          'Kiçik alışverişlər üçün ideal UC paketi. Gündəlik missiyalar və əsas kosmetik əşyalar əldə edin.',
      },
      {
        id: 2,
        title: '60 UC',
        price: 1.7,
        description:
          'Orta səviyyəli UC paketi. Premium keçid və ya yaxşı silah skinləri almaq üçün əla seçim.',
      },
      {
        id: 3,
        title: '180 UC',
        price: 6,
        description:
          'Orta səviyyəli UC paketi. Premium keçid və ya yaxşı silah skinləri almaq üçün əla seçim.',
      },
      {
        id: 4,
        title: '325 UC',
        price: 8,
        description:
          'Ən populyar UC paketi! Royal Pass almaq və əlavə kosmetiklər əldə etmək üçün kifayətdir.',
      },
      {
        id: 5,
        title: '660 UC',
        price: 15.7,
        description:
          'Böyük UC paketi. Premium məzmun, ekskluziv skinlər və Royal Pass Elite əldə edin.',
      },
      {
        id: 6,
        title: '1800 UC',
        price: 38,
        description:
          'Çox böyük UC paketi. Bir neçə aylıq premium məzmun və ekskluziv kolleksiyalar əldə edin.',
      },
      {
        id: 7,
        title: '3850 UC',
        price: 76.5,
        description:
          'Maksimum UC paketi! Bütün premium məzmuna çıxışınız olsun və dostlarınıza hədiyyələr göndərin.',
      },
      {
        id: 8,
        title: '8100 UC',
        price: 150,
        description:
          'Maksimum UC paketi! Bütün premium məzmuna çıxışınız olsun və dostlarınıza hədiyyələr göndərin.',
      },
      {
        id: 9,
        title: '16200 UC',
        price: 295,
        description:
          'Maksimum UC paketi! Bütün premium məzmuna çıxışınız olsun və dostlarınıza hədiyyələr göndərin.',
      },
    ],
    mostUsed: true,
    gameRating: 4.6,
  },
  {
    id: 2,
    name: 'PUBG Mobile - Prime',
    description:
      'PUBG Mobile UC ePin kodları ilə UC balansınızı artırın. ePin kodları təhlükəsiz və sürətli UC əldə etmək üçün ən yaxşı üsuldur. Kod aldıqdan sonra oyuna daxil olaraq istədiyiniz vaxt aktiv edə bilərsiniz. UC ilə premium keçidlər, ekskluziv kostyumlar və güclü silah skinləri əldə edin.',
    image: PubgPrime,
    icon: UcIcon,
    products: [
      {
        id: 1,
        title: 'Prime - 1 month',
        price: 1.75,
        description:
          'Təhlükəsiz UC ePin kodu. Aldıqdan sonra istədiyiniz vaxt hesabınıza əlavə edə bilərsiniz.',
        rating: 4,
      },
      {
        id: 2,
        title: 'Prime - 3 month',
        price: 4.9,
        description:
          'Orta həcmli UC ePin paketi. Premium keçid və kosmetik əşyalar üçün ideal seçim.',
        rating: 4,
      },
      {
        id: 3,
        title: 'Prime - 6 month',
        price: 9.6,
        description:
          'Populyar UC ePin paketi. Royal Pass və əlavə kosmetiklər almaq üçün kifayətdir.',
        rating: 5,
      },
      {
        id: 4,
        title: 'Prime - 12 month',
        price: 18.9,
        description:
          'Böyük UC ePin paketi. Premium məzmun və ekskluziv skinlər əldə etmək üçün əla.',
        rating: 4,
      },
    ],
    mostUsed: true,
  },
  {
    id: 3,
    name: 'Valorant EU',
    description:
      'Riot Games tərəfindən hazırlanmış taktiki 5v5 atıcı oyunu. Valorant unikal agent qabiliyyətləri ilə strategiya və atıcılıq bacarıqlarını birləşdirir. Hər agent özünəməxsus qabiliyyətlərə malikdir və komanda işi kritik əhəmiyyət daşıyır. VP (Valorant Points) ilə yeni agentlər, silah skinləri və ekskluziv kolleksiyalar əldə edin.',
    image: ValorantEu,
    icon: VpIcon,
    products: [
      {
        id: 1,
        title: '240 VP',
        price: 5.5,
        description:
          'Kiçik VP paketi. Gündəlik mağaza təklifləri və kiçik kosmetiklər üçün əla seçim.',
        rating: 4,
      },
      {
        id: 2,
        title: '475 VP',
        price: 8.4,
        description:
          'Orta VP paketi. Battle Pass almaq və ya premium silah skinləri əldə etmək üçün.',
        rating: 4,
      },
      {
        id: 3,
        title: '1000 VP',
        price: 16.7,
        description:
          'Böyük VP paketi. Premium kolleksiyalar və yeni agentlər əldə etmək üçün ideal.',
        rating: 5,
      },
      {
        id: 4,
        title: '2000 VP',
        price: 25,
        description:
          'Çox böyük VP paketi. Bütün premium məzmuna çıxış və ekskluziv kolleksiyalar.',
        rating: 4,
      },
      {
        id: 5,
        title: '3650 VP',
        price: 65,
        description:
          'Maksimum VP paketi. Premium kolleksiyalar, bütün agentlər və ekskluziv skinlər.',
        rating: 5,
      },
      {
        id: 6,
        title: '5300 VP',
        price: 85,
        description:
          'Maksimum VP paketi. Premium kolleksiyalar, bütün agentlər və ekskluziv skinlər.',
        rating: 5,
      },
    ],
    mostUsed: true,
  },
  {
    id: 4,
    name: 'Valorant TR',
    description:
      'Riot Games tərəfindən hazırlanmış taktiki 5v5 atıcı oyunu. Valorant unikal agent qabiliyyətləri ilə strategiya və atıcılıq bacarıqlarını birləşdirir. Hər agent özünəməxsus qabiliyyətlərə malikdir və komanda işi kritik əhəmiyyət daşıyır. VP (Valorant Points) ilə yeni agentlər, silah skinləri və ekskluziv kolleksiyalar əldə edin.',
    image: ValorantTr,
    icon: VpIcon,
    products: [
      {
        id: 1,
        title: '475 VP',
        price: 5.7,
        description:
          'Orta VP paketi. Battle Pass almaq və ya premium silah skinləri əldə etmək üçün.',
        rating: 4,
      },
      {
        id: 2,
        title: '1000 VP',
        price: 11.3,
        description:
          'Böyük VP paketi. Premium kolleksiyalar və yeni agentlər əldə etmək üçün ideal.',
        rating: 5,
      },
      {
        id: 3,
        title: '2050 VP',
        price: 22,
        description:
          'Çox böyük VP paketi. Bütün premium məzmuna çıxış və ekskluziv kolleksiyalar.',
        rating: 4,
      },
      {
        id: 4,
        title: '3650 VP',
        price: 37,
        description:
          'Maksimum VP paketi. Premium kolleksiyalar, bütün agentlər və ekskluziv skinlər.',
        rating: 5,
      },
      {
        id: 5,
        title: '5300 VP',
        price: 57,
        description:
          'Maksimum VP paketi. Premium kolleksiyalar, bütün agentlər və ekskluziv skinlər.',
        rating: 5,
      },
    ],
    mostUsed: true,
  },
  {
    id: 5,
    name: 'Point Blank',
    description:
      'Point Blank Türkiyə və region ölkələrində ən məşhur FPS oyunlarından biridir. Sürətli templi atışma, müxtəlif oyun rejimləri və komanda əsaslı strategiya. Çoxsaylı silah seçimi, müxtəlif xəritələr və həyəcanlı turnir sistemi ilə rəqabətli oyun təcrübəsi. Cash ilə premium silahlar, karakter kostyumları və ekskluziv əşyalar əldə edin.',
    image: PointBlank,
    icon: PbIcon,
    gameRating: 4.2,
    products: [
      {
        id: 1,
        title: '900 TG',
        price: 1.53,
        description:
          'Kiçik Cash paketi. Gündəlik əşyalar və kiçik silah modifikasiyaları üçün.',
      },
      {
        id: 2,
        title: '1800 TG',
        price: 2.86,
        description:
          'Orta Cash paketi. Premium silahlar və kostyum parçaları almaq üçün əla.',
      },
      {
        id: 3,
        title: '4500 TG',
        price: 6.9,
        description:
          'Böyük Cash paketi. Tam kostyum dəstləri və güclü silahlar əldə edin.',
      },
      {
        id: 4,
        title: '10400 TG',
        price: 14.83,
        description:
          'Çox böyük Cash paketi. VIP silahlar və ekskluziv kolleksiyalar.',
      },
      {
        id: 5,
        title: '21000 TG',
        price: 28.6,
        description:
          'Premium Cash paketi. Bütün ekskluziv məzmun və limitli əşyalara çıxış.',
      },
      {
        id: 6,
        title: '42800 TG',
        price: 56,
        description:
          'Premium Cash paketi. Bütün ekskluziv məzmun və limitli əşyalara çıxış.',
      },
    ],
    mostUsed: false,
  },

  {
    id: 6,
    name: 'Steam Cash',
    description: 'Steam cash money',
    image: SteamWallet,
    icon: SteamIcon,
    gameRating: 4.1,
    products: [
      {
        id: 1,
        title: '5 Dollars',
        price: 9.5,
        description:
          'Kiçik Diamond paketi. Günlük bonuslar və əsas kosmetiklər.',
      },
      {
        id: 2,
        title: '10 Dollars',
        price: 17.68,
        description:
          'Orta Diamond paketi. Elite Pass və premium kostyumlar üçün.',
      },
      {
        id: 3,
        title: '20 Dollars',
        price: 35.05,
        description:
          'Böyük Diamond paketi. Yeni karakterlər və silah skinləri.',
      },
      {
        id: 4,
        title: '25 Dollars',
        price: 43.9,
        description:
          'Çox böyük Diamond paketi. Bütün premium məzmun və ekskluziv əşyalar.',
      },
      {
        id: 5,
        title: '50 Dollars',
        price: 86,
        description:
          'Çox böyük Diamond paketi. Bütün premium məzmun və ekskluziv əşyalar.',
      },
      {
        id: 6,
        title: '100 Dollars',
        price: 175.5,
        description:
          'Çox böyük Diamond paketi. Bütün premium məzmun və ekskluziv əşyalar.',
      },
    ],
    mostUsed: false,
  },
  {
    id: 8,
    name: 'Tiktok Jeton',
    description: 'Tiktok jetonu',
    image: TiktokCoins,
    icon: TiktokIcon,
    gameRating: 4.1,
    products: [
      {
        id: 1,
        title: '100 Diamonds',
        price: 3,
        description:
          'Kiçik Diamond paketi. Günlük bonuslar və əsas kosmetiklər.',
        rating: 4,
      },
      {
        id: 2,
        title: '310 Diamonds',
        price: 9,
        description:
          'Orta Diamond paketi. Elite Pass və premium kostyumlar üçün.',
        rating: 4,
      },
      {
        id: 3,
        title: '520 Diamonds',
        price: 15,
        description:
          'Böyük Diamond paketi. Yeni karakterlər və silah skinləri.',
        rating: 5,
      },
      {
        id: 4,
        title: '1080 Diamonds',
        price: 30,
        description:
          'Çox böyük Diamond paketi. Bütün premium məzmun və ekskluziv əşyalar.',
        rating: 4,
      },
    ],
    mostUsed: false,
  },
];

const date = new Date();
const langCheck = {
  logo: {
    header: [
      "Bizi izləyin !",
      "Follow us !",
      "Подписывайтесь на нас !",
      "跟着我们 !",
    ],
  },
  quick: {
    header: ["Sürətli keçid", "Quick link", "Быстрая ссылка", "快速过渡"],
    home: ["Ana Səhifə", "Home", "Главная", "主页"],
    categories: ["Kateqoriyalar", "Categories", "Категории","类别"],
    contact: ["Əlaqə", "Contact", "Контакт" , "接触"],
    about: ["Haqqımızda", "About us", "О нас","关于我们"],
  },
  about: {
    header: [
      '"Respublika" Qəzeti',
      '"Respublika" Newspaper',
      'Газета "Respublika"',
      '报纸 "Respublika"',
    ],
    content: [
      "20 mart 1996-cı ildə Azərbaycan Respublikası Prezidentinin İşlər İdarəsinin və redaksiya kollektivinin təsisçiliyi ilə yaradılıb. Qəzet həftədə 6 dəfə (bazar ertəsindən başqa hər gün) A2 formatda, 8-24 səhifədə nəşr olunur.",
      "It was established on March 20, 1996 by the establishment of the Affairs Department of the President of the Republic of Azerbaijan and the editorial team. The newspaper is published 6 times a week (every day except Monday) in A2 format, 8-24 pages.",
      "Был создан 20 марта 1996 года путем создания Управления делами Президента Азербайджанской Республики и редакционного коллектива. Газета выходит 6 раз в неделю (ежедневно, кроме понедельника) формата А2, объемом 8-24 страницы.",
      "它于1996年3月20日由阿塞拜疆共和国总统办公厅和编辑团队创建。该报纸每周出版 6 期（每日，周一除外），A2 版式，8-24 页。",
    ],
    location: [
      "Bakı ş. Mətbuat pr. 529-cu məhəllə, ''Azərbaycan'' nəşriyyatı 7-ci mərtəbə",
      "Baku city. Matbuat pr. 529 block, Azerbaijan  publishing house, 7th floor",
      "Город Баку. кв. Матбуат пр. 529, издательство Азербайджан, 7 этаж",
      "巴库市。平方Matbuat Ave. 529，阿塞拜疆出版社，7楼",
    ],
  },
  info: {
    name: [
      '"Respublika" Qəzeti',
      '"Respublika" Newspaper',
      'Газета "Respublika"',
      '报纸 "Respublika',
    ],
    content: [
      " | Bütün hüquqlar qorunur | " + date.getFullYear(),
      " | All rights reserved | " + date.getFullYear(),
      " | Все права защищены | " + date.getFullYear(),
      " | 版权所有 | " + date.getFullYear(),
    ],
  },
};

export default langCheck;

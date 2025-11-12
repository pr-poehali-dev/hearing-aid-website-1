import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Oticon Zircon 1 miniRITE T',
      description: 'Компактный заушный слуховой аппарат с беспроводными возможностями',
      price: 'от 45 000 ₽',
      features: ['Беспроводная связь', 'Компактный дизайн', 'Встроенная телекатушка']
    },
    {
      id: 2,
      name: 'Oticon Xceed 3 BTE SP',
      description: 'Мощный заушный аппарат для тяжелой потери слуха',
      price: 'от 85 000 ₽',
      features: ['Сверхмощный усилитель', 'Программируемый', 'Защита от влаги']
    },
    {
      id: 3,
      name: 'ReSound KEY KE277-DWH',
      description: 'Надежный слуховой аппарат с естественным звучанием',
      price: 'от 38 000 ₽',
      features: ['Естественное звучание', 'Длительная работа батареи', 'Прост в использовании']
    },
    {
      id: 4,
      name: 'Oticon Ruby 2 BTE PP 13',
      description: 'Универсальный заушный аппарат для ежедневного использования',
      price: 'от 52 000 ₽',
      features: ['Отличное качество звука', 'Удобная посадка', 'Батарея тип 13']
    },
    {
      id: 5,
      name: 'Phonak Audeo P50-312',
      description: 'Современный аппарат с технологией адаптивного звука',
      price: 'от 68 000 ₽',
      features: ['Автоматическая адаптация', 'Шумоподавление', 'Батарея тип 312']
    }
  ];

  const services = [
    {
      icon: 'Stethoscope',
      title: 'Диагностика слуха',
      description: 'Полное обследование слуха на современном оборудовании'
    },
    {
      icon: 'Settings',
      title: 'Подбор аппаратов',
      description: 'Индивидуальный подбор слухового аппарата под ваши потребности'
    },
    {
      icon: 'Wrench',
      title: 'Настройка и ремонт',
      description: 'Профессиональная настройка и ремонт слуховых аппаратов'
    },
    {
      icon: 'HeadphonesIcon',
      title: 'Консультации',
      description: 'Бесплатные консультации специалистов-сурдологов'
    }
  ];

  const articles = [
    {
      title: 'Как выбрать слуховой аппарат',
      date: '15 октября 2024',
      excerpt: 'Полное руководство по выбору подходящего слухового аппарата для ваших нужд...'
    },
    {
      title: 'Уход за слуховыми аппаратами',
      date: '8 октября 2024',
      excerpt: 'Основные правила ухода и обслуживания слуховых аппаратов для долгой службы...'
    },
    {
      title: 'Современные технологии в слухопротезировании',
      date: '1 октября 2024',
      excerpt: 'Обзор последних технологических достижений в области слуховых аппаратов...'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/41dce215-c439-4dc6-9855-93aeb13a63b3.png" 
                alt="Ясный слух" 
                className="h-12 w-12"
              />
              <div>
                <h1 className="text-2xl font-heading font-bold text-primary">Ясный слух</h1>
                <p className="text-xs text-muted-foreground">Центр слуховых аппаратов</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-1">
              {['home', 'catalog', 'services', 'articles', 'about'].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(section)}
                  className="font-medium"
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'services' && 'Услуги'}
                  {section === 'articles' && 'Статьи'}
                  {section === 'about' && 'О нас'}
                </Button>
              ))}
            </nav>
            <Button className="hidden md:flex items-center gap-2">
              <Icon name="Phone" size={18} />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Вернём вам радость
                <span className="text-primary"> слышать</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Профессиональный подбор и настройка слуховых аппаратов ведущих мировых производителей. 
                Более 15 лет заботы о вашем слухе.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('catalog')}>
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на прием
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                    <CardTitle className="font-heading">15+ лет опыта</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Профессиональные специалисты с большим опытом работы</p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <Icon name="Users" size={24} className="text-primary" />
                    </div>
                    <CardTitle className="font-heading">5000+ клиентов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Тысячи довольных клиентов по всей России</p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <Icon name="Shield" size={24} className="text-primary" />
                    </div>
                    <CardTitle className="font-heading">Гарантия качества</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Официальная гарантия на все слуховые аппараты</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Каталог слуховых аппаратов</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Широкий выбор слуховых аппаратов ведущих мировых производителей
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-full h-48 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Ear" size={64} className="text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl">{product.name}</CardTitle>
                    <CardDescription className="text-base">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-2xl font-heading font-bold text-primary">{product.price}</p>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Заказать
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Подробнее
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Наши услуги</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексные решения для восстановления и улучшения слуха
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {services.map((service, idx) => (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={service.icon} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="font-heading">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="articles" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Полезные статьи</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Узнайте больше о слухе и слуховых аппаратах
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {articles.map((article, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="BookOpen" size={48} className="text-primary" />
                    </div>
                    <CardTitle className="font-heading text-lg">{article.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{article.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="px-0">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">О нас</h2>
                <p className="text-lg text-muted-foreground">
                  Центр слуховых аппаратов «Ясный слух»
                </p>
              </div>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Наша миссия</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Мы помогаем людям вернуть радость полноценного общения и улучшить качество жизни 
                        с помощью современных слуховых аппаратов и профессионального обслуживания.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Наша команда состоит из квалифицированных специалистов-сурдологов с многолетним 
                        опытом работы в области слухопротезирования.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Почему мы?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground">Официальный дилер ведущих производителей</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground">Бесплатная диагностика слуха</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground">Индивидуальный подход к каждому клиенту</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground">Гарантийное и послегарантийное обслуживание</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground">Удобное расположение центра</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/41dce215-c439-4dc6-9855-93aeb13a63b3.png" 
                  alt="Ясный слух" 
                  className="h-10 w-10 brightness-0 invert"
                />
                <h3 className="text-xl font-heading font-bold">Ясный слух</h3>
              </div>
              <p className="text-sm text-background/80">
                Центр слуховых аппаратов
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('articles')} className="hover:text-primary transition-colors">Статьи</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@yasniy-sluh.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, д. 1
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">График работы</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Пн-Пт: 9:00 - 20:00</li>
                <li>Сб: 10:00 - 18:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-6 text-center text-sm text-background/60">
            <p>© 2024 Ясный слух. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import React, { useState, useEffect, useCallback } from 'react';
import doctorImage from '../../assec/block33.jpg';
import './Kvis.css';

const Kvis = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [dentalSituation, setDentalSituation] = useState('');
  const [painArea, setPainArea] = useState('');
  const [painFeeling, setPainFeeling] = useState('');
  const [visualChanges, setVisualChanges] = useState('');
  const [toothToRemove, setToothToRemove] = useState('');
  const [toothCondition, setToothCondition] = useState('');
  const [removalVisualChanges, setRemovalVisualChanges] = useState('');
  const [crownSituation, setCrownSituation] = useState('');
  const [crownGoal, setCrownGoal] = useState('');
  const [crownTeeth, setCrownTeeth] = useState('');
  const [implantSituation, setImplantSituation] = useState('');
  const [implantTeethCount, setImplantTeethCount] = useState('');
  const [implantPriority, setImplantPriority] = useState('');
  const [implantDiagnostics, setImplantDiagnostics] = useState('');
  const [whiteningFillings, setWhiteningFillings] = useState('');
  const [whiteningMethod, setWhiteningMethod] = useState('');
  const [hygieneReason, setHygieneReason] = useState('');
  const [hygieneLastVisit, setHygieneLastVisit] = useState('');
  const [veneersSituation, setVeneersSituation] = useState('');
  const [veneersTeethCount, setVeneersTeethCount] = useState('');
  const [consultationFor, setConsultationFor] = useState('');
  const [lastDentistVisit, setLastDentistVisit] = useState('');
  const [messengerType, setMessengerType] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  // Функция для форматирования номера телефона
  const formatPhoneNumber = (value) => {
    // Удаляем все нецифровые символы
    const digits = value.replace(/\D/g, '');
    
    // Ограничиваем до 10 цифр
    const limitedDigits = digits.slice(0, 10);
    
    // Форматируем: 3 цифры пробел 3 цифры пробел 2 цифры пробел 2 цифры
    if (limitedDigits.length === 0) return '';
    if (limitedDigits.length <= 3) return limitedDigits;
    if (limitedDigits.length <= 6) return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3)}`;
    if (limitedDigits.length <= 8) return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 6)} ${limitedDigits.slice(6)}`;
    return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 6)} ${limitedDigits.slice(6, 8)} ${limitedDigits.slice(8)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setUserPhone(formatted);
  };

  const services = [
    'Лечение зубов',
    'Удаление зуба',
    'Коронки/протезирование',
    'Имплантация',
    'Отбеливание зубов',
    'Проф.гигиена',
    'Виниры и реставрация',
    'Консультация/плановый осмотр'
  ];

  const dentalSituationOptions = [
    'Зуб реагирует на сладкое',
    'Острая, резкая, стреляющая боль (особенно при накусывании)',
    'Боль ноющая, постоянная',
    'Зуб реагирует на температурные раздражители',
    'Нужна консультация'
  ];

  const painAreaOptions = [
    'Верхняя челюсть жевательный зуб',
    'Нижняя челюсть жевательный зуб',
    'Фронтальный зуб (передний зуб)'
    
  ];

  const painFeelingOptions = [
    'в одном конкретном зубе',
    'боль отдает в другие зубы',
    'боль отдает в ухо/горло/голову',
    'другое'
  ];

  const visualChangesOptions = [
    'глубокая дырка/скол/трещина/старая пломба',
    'отек щеки/лица',
    'припухлость десны',
    'нет',
    'другое'
  ];

  const toothToRemoveOptions = [
    'зуб мудрости (прорезанный)',
    'зуб мудрости (непрорезанный)',
    'жевательный зуб',
    'фронтальный зуб (передний зуб)',
    'нужна консультация'
  ];

  const toothConditionOptions = [
    'подвижный',
    'разрушенный',
    'целый',
    'нужна консультация'
  ];

  const removalVisualChangesOptions = [
    'нет',
    'отек щеки/лица',
    'другое'
  ];

  const crownSituationOptions = [
    'Есть имплант, нужна коронка',
    'Есть отсутствующие зубы',
    'Старые разрушенные коронки/мосты',
    'Неэстетичный вид зубов',
    'Требуется установить коронку на зуб',
    'Нужна консультация'
  ];

  const crownGoalOptions = [
    'Восстановить функцию жевания (чтобы есть любую пищу без ограничений)',
    'Максимальная естественность и красота ("голливудская" улыбка)',
    'Бюджетное решение (оптимальное соотношение цены и качества)',
    'Минимальное вмешательство (сохранение соседних зубов)',
    'Нужна консультация'
  ];

  const crownTeethOptions = [
    'Жевательный зуб',
    'Фронтальный зуб (передний)'
  ];

  const implantSituationOptions = [
    'Есть отсутствующие зубы',
    'Есть зубы, которые необходимо удалить и установить имплант',
    'Нужна консультация'
  ];

  const implantTeethCountOptions = [
    '1',
    '2 и более',
    'нужна консультация'
  ];

  const implantPriorityOptions = [
    'Сокращение сроков лечения (возможность немедленной нагрузки)',
    'Минимизация хирургических этапов (одномоментная имплантация, костная пластика одновременно)',
    'Согласен на длительный процесс лечения',
    'Стоимость лечения',
    'Другое'
  ];

  const implantDiagnosticsOptions = [
    'Да, есть компьютерная томография (КТ) челюстей',
    'Нет, но готов(а) сделать'
  ];

  const whiteningFillingsOptions = [
    'Да',
    'Нет'
  ];

  const whiteningMethodOptions = [
    'Клиническое отбеливание',
    'Домашнее отбеливание',
    'Комбинированное отбеливание (клиническое+домашнее)',
    'Нужна консультация врача'
  ];

  const hygieneReasonOptions = [
    'Плановая профилактическая чистка',
    'Образование заметного зубного камня или налета',
    'Подготовка к лечению, отбеливанию, протезированию или имплантации',
    'Другое'
  ];

  const hygieneLastVisitOptions = [
    'Никогда не проходил(а)',
    'Более 1-2 лет назад',
    'Регулярно, раз в полгода/год'
  ];

  const veneersSituationOptions = [
    'Не устраивает цвет/форма зубов/размер/положение',
    'Незначительные дефекты (сколы, большие старые пломбы)',
    'Стираемость зубов',
    'Желание получить «голливудский» стандарт',
    'Нужна консультация врача'
  ];

  const veneersTeethCountOptions = [
    'верхняя челюсть (зона улыбки)',
    'нижняя челюсть (зона улыбки)',
    'Обе челюсти',
    'Нужна консультация врача'
  ];

  const consultationForOptions = [
    'себя',
    'ребенка',
    'другое'
  ];

  const lastDentistVisitOptions = [
    'Меньше месяца назад',
    'Около 6 месяцев',
    'Около года',
    'Не помню'
  ];

  // Функция для выбора услуги с авто-переходом
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    // Временно отключено - переход только через кнопку "ДАЛЕЕ"
    // if (service === 'Лечение зубов') {
    //   setStep(2);
    // } else if (service === 'Удаление зуба') {
    //   setStep(7);
    // } else if (service === 'Коронки/протезирование') {
    //   setStep(10);
    // } else if (service === 'Имплантация') {
    //   setStep(13);
    // } else if (service === 'Отбеливание зубов') {
    //   setStep(17);
    // } else if (service === 'Проф.гигиена') {
    //   setStep(19);
    // } else if (service === 'Виниры и реставрация') {
    //   setStep(21);
    // } else if (service === 'Консультация/плановый осмотр') {
    //   setStep(23);
    // }
  };

  // Универсальная функция для выбора опции с авто-переходом
  const handleOptionSelect = (setter, value, nextStep) => {
    setter(value);
    // setStep(nextStep); // Временно отключено
  };

  const handleNext = useCallback(() => {
    if (step === 1) {
      if (!selectedService) {
        alert('Пожалуйста, выберите услугу');
        return;
      }
      if (selectedService === 'Лечение зубов') {
        setStep(2);
      } else if (selectedService === 'Удаление зуба') {
        setStep(7);
      } else if (selectedService === 'Коронки/протезирование') {
        setStep(10);
      } else if (selectedService === 'Имплантация') {
        setStep(13);
      } else if (selectedService === 'Отбеливание зубов') {
        setStep(17);
      } else if (selectedService === 'Проф.гигиена') {
        setStep(19);
      } else if (selectedService === 'Виниры и реставрация') {
        setStep(21);
      } else if (selectedService === 'Консультация/плановый осмотр') {
        setStep(23);
      } else {
        alert('Для других услуг опрос будет добавлен позже');
      }
    } else if (step === 2) {
      if (!dentalSituation) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!painArea) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(4);
    } else if (step === 4) {
      if (!painFeeling) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(5);
    } else if (step === 5) {
      if (!visualChanges) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 6) {
      if (!messengerType) {
        alert('Пожалуйста, выберите способ связи');
        return;
      }
      if (!privacyConsent) {
        alert('Пожалуйста, согласитесь на обработку персональных данных');
        return;
      }
      // Финальный шаг - отправка данных
      console.log('Form submitted:', {
        service: selectedService,
        dentalSituation,
        painArea,
        painFeeling,
        visualChanges,
        toothToRemove,
        toothCondition,
        removalVisualChanges,
        crownSituation,
        crownGoal,
        crownTeeth,
        implantSituation,
        implantTeethCount,
        implantPriority,
        implantDiagnostics,
        whiteningFillings,
        whiteningMethod,
        hygieneReason,
        hygieneLastVisit,
        veneersSituation,
        veneersTeethCount,
        consultationFor,
        lastDentistVisit,
        messengerType,
        privacyConsent
      });
      alert('Спасибо! Ваша заявка отправлена.');
    } else if (step === 7) {
      if (!toothToRemove) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(8);
    } else if (step === 8) {
      if (!toothCondition) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(9);
    } else if (step === 9) {
      if (!removalVisualChanges) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 10) {
      if (!crownSituation) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(11);
    } else if (step === 11) {
      if (!crownGoal) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(12);
    } else if (step === 12) {
      if (!crownTeeth) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 13) {
      if (!implantSituation) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(14);
    } else if (step === 14) {
      if (!implantTeethCount) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(15);
    } else if (step === 15) {
      if (!implantPriority) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(16);
    } else if (step === 16) {
      if (!implantDiagnostics) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 17) {
      if (!whiteningFillings) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(18);
    } else if (step === 18) {
      if (!whiteningMethod) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 19) {
      if (!hygieneReason) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(20);
    } else if (step === 20) {
      if (!hygieneLastVisit) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 21) {
      if (!veneersSituation) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(22);
    } else if (step === 22) {
      if (!veneersTeethCount) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    } else if (step === 23) {
      if (!consultationFor) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(24);
    } else if (step === 24) {
      if (!lastDentistVisit) {
        alert('Пожалуйста, выберите вариант');
        return;
      }
      setStep(6);
    }
  }, [step, selectedService, dentalSituation, painArea, painFeeling, visualChanges, toothToRemove, toothCondition, removalVisualChanges, crownSituation, crownGoal, crownTeeth, implantSituation, implantTeethCount, implantPriority, implantDiagnostics, whiteningFillings, whiteningMethod, hygieneReason, hygieneLastVisit, veneersSituation, veneersTeethCount, consultationFor, lastDentistVisit, messengerType, privacyConsent]);

  const handleBack = () => {
    if (step === 7) {
      setStep(1);
    } else if (step === 8) {
      setStep(7);
    } else if (step === 9) {
      setStep(8);
    } else if (step === 10) {
      setStep(1);
    } else if (step === 11) {
      setStep(10);
    } else if (step === 12) {
      setStep(11);
    } else if (step === 13) {
      setStep(1);
    } else if (step === 14) {
      setStep(13);
    } else if (step === 15) {
      setStep(14);
    } else if (step === 16) {
      setStep(15);
    } else if (step === 17) {
      setStep(1);
    } else if (step === 18) {
      setStep(17);
    } else if (step === 19) {
      setStep(1);
    } else if (step === 20) {
      setStep(19);
    } else if (step === 21) {
      setStep(1);
    } else if (step === 22) {
      setStep(21);
    } else if (step === 23) {
      setStep(1);
    } else if (step === 24) {
      setStep(23);
    } else if (step === 6 && selectedService === 'Удаление зуба') {
      setStep(9);
    } else if (step === 6 && selectedService === 'Коронки/протезирование') {
      setStep(12);
    } else if (step === 6 && selectedService === 'Имплантация') {
      setStep(16);
    } else if (step === 6 && selectedService === 'Отбеливание зубов') {
      setStep(18);
    } else if (step === 6 && selectedService === 'Проф.гигиена') {
      setStep(20);
    } else if (step === 6 && selectedService === 'Виниры и реставрация') {
      setStep(22);
    } else if (step === 6 && selectedService === 'Консультация/плановый осмотр') {
      setStep(24);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleNext]);

  // Функция для расчета прогресса
  const getProgress = () => {
    if (step === 1 || !selectedService) {
      return { percentage: 0, current: 0, total: 0 };
    }

    // Определяем шаги для каждой услуги
    const serviceSteps = {
      'Лечение зубов': { steps: [2, 3, 4, 5, 6], total: 5 },
      'Удаление зуба': { steps: [7, 8, 9, 6], total: 4 },
      'Коронки/протезирование': { steps: [10, 11, 12, 6], total: 4 },
      'Имплантация': { steps: [13, 14, 15, 16, 6], total: 5 },
      'Отбеливание зубов': { steps: [17, 18, 6], total: 3 },
      'Проф.гигиена': { steps: [19, 20, 6], total: 3 },
      'Виниры и реставрация': { steps: [21, 22, 6], total: 3 },
      'Консультация/плановый осмотр': { steps: [23, 24, 6], total: 3 }
    };

    const serviceInfo = serviceSteps[selectedService];
    if (!serviceInfo) {
      return { percentage: 0, current: 0, total: 0 };
    }

    // Находим индекс текущего шага в массиве шагов услуги
    const stepIndex = serviceInfo.steps.indexOf(step);
    
    if (stepIndex === -1) {
      // Если текущий шаг не относится к этой услуге
      return { percentage: 0, current: 0, total: serviceInfo.total };
    }

    // Вычисляем прогресс (stepIndex + 1, так как индекс начинается с 0)
    const currentStep = stepIndex + 1;
    const percentage = Math.round((currentStep / serviceInfo.total) * 100);
    
    return {
      percentage,
      current: currentStep,
      total: serviceInfo.total
    };
  };

  const progress = getProgress();

  // Функция для расчета текущей скидки
  const getCurrentDiscount = () => {
    if (step === 1 || !selectedService) {
      return 0;
    }
    
    const totalDiscount = 10; // Общая скидка 10%
    const progressData = getProgress();
    
    if (progressData.total === 0) {
      return 0;
    }
    
    // Рассчитываем скидку пропорционально прогрессу
    const discount = Math.round((progressData.current / progressData.total) * totalDiscount);
    return discount;
  };

  const currentDiscount = getCurrentDiscount();

  const renderStep1 = () => (
    <>
      <h2 className="kvis-title">Что именно Вы ищете?</h2>
      <div className="kvis-options-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`kvis-option ${selectedService === service ? 'selected' : ''}`}
            onClick={() => handleServiceSelect(service)}
          >
            <div className="kvis-radio-wrapper">
              {selectedService === service ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{service}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <h2 className="kvis-title">Что Вас беспокоит?</h2>
      <div className="kvis-options-grid">
        {dentalSituationOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${dentalSituation === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setDentalSituation, option, 3)}
          >
            <div className="kvis-radio-wrapper">
              {dentalSituation === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <h2 className="kvis-title">Опишите область, где болит:</h2>
      <div className="kvis-options-grid">
        {painAreaOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${painArea === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setPainArea, option, 4)}
          >
            <div className="kvis-radio-wrapper">
              {painArea === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep4 = () => (
    <>
      <h2 className="kvis-title">Как ощущается боль?</h2>
      <div className="kvis-options-grid">
        {painFeelingOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${painFeeling === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setPainFeeling, option, 5)}
          >
            <div className="kvis-radio-wrapper">
              {painFeeling === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep5 = () => (
    <>
      <h2 className="kvis-title">Есть ли визуальные изменения</h2>
      <div className="kvis-options-grid">
        {visualChangesOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${visualChanges === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setVisualChanges, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {visualChanges === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep7 = () => (
    <>
      <h2 className="kvis-title">Какой зуб планируете удалить?</h2>
      <div className="kvis-options-grid">
        {toothToRemoveOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${toothToRemove === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setToothToRemove, option, 8)}
          >
            <div className="kvis-radio-wrapper">
              {toothToRemove === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep8 = () => (
    <>
      <h2 className="kvis-title">В каком состоянии зуб?</h2>
      <div className="kvis-options-grid">
        {toothConditionOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${toothCondition === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setToothCondition, option, 9)}
          >
            <div className="kvis-radio-wrapper">
              {toothCondition === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep9 = () => (
    <>
      <h2 className="kvis-title">Есть ли визуальные изменения?</h2>
      <div className="kvis-options-grid">
        {removalVisualChangesOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${removalVisualChanges === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setRemovalVisualChanges, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {removalVisualChanges === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep10 = () => (
    <>
      <h2 className="kvis-title">Какая у Вас ситуация?</h2>
      <div className="kvis-options-grid">
        {crownSituationOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${crownSituation === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setCrownSituation, option, 11)}
          >
            <div className="kvis-radio-wrapper">
              {crownSituation === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep11 = () => (
    <>
      <h2 className="kvis-title">Какая Ваша главная цель протезирования?</h2>
      <div className="kvis-options-grid">
        {crownGoalOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${crownGoal === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setCrownGoal, option, 12)}
          >
            <div className="kvis-radio-wrapper">
              {crownGoal === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep12 = () => (
    <>
      <h2 className="kvis-title">Какие зубы необходимо восстановить?</h2>
      <div className="kvis-options-grid">
        {crownTeethOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${crownTeeth === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setCrownTeeth, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {crownTeeth === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep13 = () => (
    <>
      <h2 className="kvis-title">Какая у Вас ситуация?</h2>
      <div className="kvis-options-grid">
        {implantSituationOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${implantSituation === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setImplantSituation, option, 14)}
          >
            <div className="kvis-radio-wrapper">
              {implantSituation === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep14 = () => (
    <>
      <h2 className="kvis-title">Сколько зубов у Вас отсутствуют?</h2>
      <div className="kvis-options-grid">
        {implantTeethCountOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${implantTeethCount === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setImplantTeethCount, option, 15)}
          >
            <div className="kvis-radio-wrapper">
              {implantTeethCount === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep15 = () => (
    <>
      <h2 className="kvis-title">Ваши приоритеты в лечении</h2>
      <div className="kvis-options-grid">
        {implantPriorityOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${implantPriority === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setImplantPriority, option, 16)}
          >
            <div className="kvis-radio-wrapper">
              {implantPriority === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep16 = () => (
    <>
      <h2 className="kvis-title">Была ли проведена предварительная диагностика?</h2>
      <div className="kvis-options-grid">
        {implantDiagnosticsOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${implantDiagnostics === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setImplantDiagnostics, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {implantDiagnostics === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep17 = () => (
    <>
      <h2 className="kvis-title">Есть ли пломбы на передних зубах?</h2>
      <div className="kvis-options-grid">
        {whiteningFillingsOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${whiteningFillings === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setWhiteningFillings, option, 18)}
          >
            <div className="kvis-radio-wrapper">
              {whiteningFillings === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep18 = () => (
    <>
      <h2 className="kvis-title">Какой метод осветления планируете сделать?</h2>
      <div className="kvis-options-grid">
        {whiteningMethodOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${whiteningMethod === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setWhiteningMethod, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {whiteningMethod === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep19 = () => (
    <>
      <h2 className="kvis-title">Основная причина визита на гигиену?</h2>
      <div className="kvis-options-grid">
        {hygieneReasonOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${hygieneReason === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setHygieneReason, option, 20)}
          >
            <div className="kvis-radio-wrapper">
              {hygieneReason === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep20 = () => (
    <>
      <h2 className="kvis-title">Как давно вы последний раз проходили профессиональную гигиену?</h2>
      <div className="kvis-options-grid">
        {hygieneLastVisitOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${hygieneLastVisit === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setHygieneLastVisit, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {hygieneLastVisit === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep21 = () => (
    <>
      <h2 className="kvis-title">Какая у Вас ситуация?</h2>
      <div className="kvis-options-grid">
        {veneersSituationOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${veneersSituation === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setVeneersSituation, option, 22)}
          >
            <div className="kvis-radio-wrapper">
              {veneersSituation === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep22 = () => (
    <>
      <h2 className="kvis-title">На какое количество зубов хотите установить виниры?</h2>
      <div className="kvis-options-grid">
        {veneersTeethCountOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${veneersTeethCount === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setVeneersTeethCount, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {veneersTeethCount === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep23 = () => (
    <>
      <h2 className="kvis-title">Кого хотите записать на прием?</h2>
      <div className="kvis-options-grid">
        {consultationForOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${consultationFor === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setConsultationFor, option, 24)}
          >
            <div className="kvis-radio-wrapper">
              {consultationFor === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep24 = () => (
    <>
      <h2 className="kvis-title">Когда в последний раз были у стоматолога?</h2>
      <div className="kvis-options-grid">
        {lastDentistVisitOptions.map((option, index) => (
          <div
            key={index}
            className={`kvis-option ${lastDentistVisit === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(setLastDentistVisit, option, 6)}
          >
            <div className="kvis-radio-wrapper">
              {lastDentistVisit === option ? (
                <div className="kvis-checkbox checked">
                  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="kvis-checkbox"></div>
              )}
            </div>
            <span className="kvis-option-text">{option}</span>
          </div>
        ))}
      </div>
    </>
  );

  const renderStep6 = () => (
    <div className="kvis-final-step">
      <div className="kvis-final-left">
        <h2 className="kvis-final-title">Почти готово! Введите свой номер, на который мы отправим подарки, расчёт стоимости лечения и скидку 10%.</h2>
        <p className="kvis-promo-text">А Ваш персональный помощник по всем вопросам стоматологии - Анна перезвонит Вам и ответит на все Ваши вопросы и сориентирует по цене.</p>
        <div className="kvis-offer-cards">
          <div className="kvis-offer-card">
            <div className="kvis-offer-icon">
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.98138 8.44842C2.82938 8.44842 1.87738 8.10442 1.12538 7.41642C0.373375 6.71242 -0.00262499 5.64842 -0.00262499 4.22442C-0.00262499 2.78442 0.373375 1.72042 1.12538 1.03242C1.87738 0.344421 2.82938 0.00042057 3.98138 0.00042057C5.13338 0.00042057 6.07738 0.344421 6.81338 1.03242C7.56538 1.72042 7.94138 2.78442 7.94138 4.22442C7.94138 5.64842 7.56538 6.71242 6.81338 7.41642C6.07738 8.10442 5.13338 8.44842 3.98138 8.44842ZM3.98138 6.62442C4.49338 6.62442 4.87738 6.42442 5.13338 6.02442C5.38938 5.62442 5.51738 5.02442 5.51738 4.22442C5.51738 3.42442 5.38938 2.82442 5.13338 2.42442C4.87738 2.02442 4.49338 1.82442 3.98138 1.82442C3.48538 1.82442 3.10138 2.02442 2.82938 2.42442C2.57338 2.82442 2.44538 3.42442 2.44538 4.22442C2.44538 5.02442 2.57338 5.62442 2.82938 6.02442C3.10138 6.42442 3.48538 6.62442 3.98138 6.62442ZM14.0614 17.4244C12.9094 17.4244 11.9574 17.0804 11.2054 16.3924C10.4534 15.6884 10.0774 14.6244 10.0774 13.2004C10.0774 11.7604 10.4534 10.6964 11.2054 10.0084C11.9574 9.32042 12.9094 8.97642 14.0614 8.97642C15.2134 8.97642 16.1654 9.32042 16.9174 10.0084C17.6694 10.6964 18.0454 11.7604 18.0454 13.2004C18.0454 14.6244 17.6694 15.6884 16.9174 16.3924C16.1654 17.0804 15.2134 17.4244 14.0614 17.4244ZM14.0614 15.6004C14.5734 15.6004 14.9574 15.4004 15.2134 15.0004C15.4694 14.6004 15.5974 14.0004 15.5974 13.2004C15.5974 12.4004 15.4694 11.8004 15.2134 11.4004C14.9574 11.0004 14.5734 10.8004 14.0614 10.8004C13.5654 10.8004 13.1814 11.0004 12.9094 11.4004C12.6534 11.8004 12.5254 12.4004 12.5254 13.2004C12.5254 14.0004 12.6534 14.6004 12.9094 15.0004C13.1814 15.4004 13.5654 15.6004 14.0614 15.6004ZM2.25338 17.2324L13.5814 0.192421H15.7894L4.46138 17.2324H2.25338Z" fill="white"/>
              </svg>
            </div>
            <span className="kvis-offer-text">Скидку 10% на лечение.</span>
            <div className="kvis-offer-checkbox checked">
              <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="kvis-offer-card">
            <div className="kvis-offer-icon">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5882 14.625C12.4567 14.625 13.9749 18 15.2206 18C17.7119 18 21.1765 9 21.1765 3.9375C21.1765 1.779 19.0355 1.66413e-06 16.5441 1.44633e-06C14.0528 1.22853e-06 12.4567 2.57143 10.5882 2.57143C8.71972 2.57143 7.1237 6.22774e-07 4.63235 4.04973e-07C2.141 1.87173e-07 -1.47526e-07 1.6875 -3.44227e-07 3.9375C-7.86805e-07 9 3.46453 18 5.95588 18C7.20156 18 8.71972 14.625 10.5882 14.625Z" fill="white"/>
              </svg>
            </div>
            <span className="kvis-offer-text">Прицельный панорамный снимок зубов.</span>
            <div className="kvis-offer-checkbox checked">
              <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="kvis-offer-card">
            <div className="kvis-offer-icon">
              <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.55382 16.6669H12.2205M5.55382 13.3335H12.2205M9.99868 1.1123C9.89253 1.11133 9.77313 1.11133 9.63683 1.11133H4.66515C3.42059 1.11133 2.79784 1.11133 2.32248 1.35354C1.90434 1.56659 1.56463 1.9063 1.35158 2.32444C1.10938 2.7998 1.10938 3.42254 1.10938 4.6671V17.556C1.10938 18.8005 1.10938 19.4225 1.35158 19.8979C1.56464 20.316 1.90434 20.6563 2.32248 20.8694C2.79738 21.1113 3.41938 21.1113 4.66153 21.1113L13.1128 21.1113C14.3549 21.1113 14.976 21.1113 15.4509 20.8694C15.8691 20.6563 16.2099 20.316 16.423 19.8979C16.6649 19.423 16.6649 18.8019 16.6649 17.5597V8.13987C16.6649 8.00357 16.6648 7.88414 16.6638 7.77799M9.99868 1.1123C10.3159 1.11519 10.5157 1.12696 10.7073 1.17296C10.9341 1.2274 11.1514 1.31718 11.3503 1.43902C11.5744 1.5764 11.7669 1.7689 12.151 2.15299L15.6238 5.62575C16.0081 6.01009 16.1992 6.20173 16.3367 6.42599C16.4585 6.62482 16.5486 6.84161 16.6031 7.06836C16.6491 7.25998 16.661 7.46082 16.6638 7.77799M9.99868 1.1123L9.99826 4.22267C9.99826 5.46723 9.99826 6.08927 10.2405 6.56463C10.4535 6.98277 10.7932 7.32297 11.2114 7.53602C11.6863 7.77799 12.3083 7.77799 13.5504 7.77799H16.6638" stroke="white" strokeWidth="2.22222" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="kvis-offer-text">В качестве бонуса вы получите PDF-гид "Как общаться со стоматологом на равных: 7 вопросов, которые спасут Ваш бюджет". Это поможет Вам сохранить до 30% на лечении, просто задавая правильные вопросы.</span>
            <div className="kvis-offer-checkbox checked">
              <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="kvis-inputs-section">
          <input
            type="text"
            className="kvis-input kvis-name-input"
            placeholder="Введите Ваше имя"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="kvis-phone-input-wrapper">
            <div className="kvis-phone-prefix">
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="15" fill="white"/>
                <rect y="5" width="20" height="5" fill="#0039A6"/>
                <rect y="10" width="20" height="5" fill="#D52B1E"/>
              </svg>
              <span>+ 7</span>
            </div>
            <input
              type="tel"
              className="kvis-input kvis-phone-input"
              placeholder="Введите Ваш номер телефона"
              value={userPhone}
              onChange={handlePhoneChange}
              maxLength={17}
            />
          </div>
        </div>
        <div className="googing-form-checkbox">
          <input 
            type="checkbox" 
            id="kvis-consent" 
            checked={privacyConsent}
            onChange={(e) => setPrivacyConsent(e.target.checked)}
          />
          <label htmlFor="kvis-consent">Даю согласие на обработку персональных данных</label>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      case 6:
        return renderStep6();
      case 7:
        return renderStep7();
      case 8:
        return renderStep8();
      case 9:
        return renderStep9();
      case 10:
        return renderStep10();
      case 11:
        return renderStep11();
      case 12:
        return renderStep12();
      case 13:
        return renderStep13();
      case 14:
        return renderStep14();
      case 15:
        return renderStep15();
      case 16:
        return renderStep16();
      case 17:
        return renderStep17();
      case 18:
        return renderStep18();
      case 19:
        return renderStep19();
      case 20:
        return renderStep20();
      case 21:
        return renderStep21();
      case 22:
        return renderStep22();
      case 23:
        return renderStep23();
      case 24:
        return renderStep24();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="kvis-container">
      <div className="kvis-card">
        <div className={`kvis-content-wrapper kvis-two-columns ${step === 6 ? 'kvis-step-6' : ''}`}>
          <div className="kvis-form-section">
            {step !== 6 && (
              <>
                <h1 className="kvis-calculator-title">
                  <span className="kvis-calculator-title-main">КАЛЬКУЛЯТОР </span><span className="kvis-calculator-title-underline">СТОИМОСТИ ЛЕЧЕНИЯ</span>
                </h1>
                <p className="kvis-calculator-subtitle">
                  Узнайте стоимость Вашего лечения за 2 минуты!
                </p>
              </>
            )}
            {renderCurrentStep()}

            <div className={`kvis-navigation ${step === 6 ? 'kvis-navigation-step6' : ''}`}>
              {step !== 6 && (
                <div className="kvis-discount-message">
                  <div className="kvis-discount-icon">
                    {step === 1 ? (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#485B85"/>
                      <path d="M12 7V13M12 17H12.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7" cy="7" r="7" fill="#485B85"/>
                        <g transform="translate(3.25, 4) scale(0.75)">
                          <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </g>
                      </svg>
                    )}
                  </div>
                  {step === 1 ? (
                  <p className="kvis-discount-text">
                    Ответь на вопросы и получи скидку 10% на лечение &gt;&gt;
                  </p>
                  ) : (
                    <div className="kvis-discount-dynamic">
                      <p className="kvis-discount-current">Ваша скидка {currentDiscount}%</p>
                      <p className="kvis-discount-hint">Ответьте на вопрос, жмите далее и скидка увеличится</p>
                    </div>
                  )}
                </div>
              )}
              {step === 6 ? (
                <>
                  <button 
                    className="kvis-btn-back" 
                    onClick={handleBack}
                  >
                    Назад
                  </button>
                  <button className="kvis-btn-next kvis-btn-submit header_nuv-btn-1 header_nuv-btn-primary" onClick={handleNext}>
                    <span>Отправить расчёт и подарки</span>
                    <div className="header_nuv-btn-icon">
                      <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#485B85"/>
                      </svg>
                    </div>
                  </button>
                </>
              ) : (
                <div className="kvis-next-wrapper">
                  {step > 1 && (
                    <button 
                      className="kvis-btn-back" 
                      onClick={handleBack}
                    >
                      Назад
                    </button>
                  )}
                  {step !== 24 && (
                    <button className="kvis-btn-next header_nuv-btn-1 header_nuv-btn-primary" onClick={handleNext}>
                      <span>Далее</span>
                      <div className="header_nuv-btn-icon">
                        <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#485B85"/>
                        </svg>
                      </div>
                    </button>
                  )}
                  {step === 24 && (
                    <button className="kvis-btn-next header_nuv-btn-1 header_nuv-btn-primary" onClick={handleNext}>
                      <span>ДАЛЕЕ</span>
                      <div className="header_nuv-btn-icon">
                        <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#485B85"/>
                        </svg>
                      </div>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {(step === 1 || (step > 1 && step !== 6)) && (
            <div className="kvis-image-section">
              <div className="kvis-doctor-image-wrapper">
                <img src={doctorImage} alt="Доктор" className="kvis-doctor-image" />
                {step === 1 && (
                  <div className="kvis-play-button">
                    <svg viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.14062 20.8873V4.2563C1.14062 2.88492 1.14062 2.19847 1.38456 1.79272C1.59747 1.43858 1.92563 1.20607 2.28995 1.15048C2.70722 1.08681 3.219 1.40972 4.2411 2.05461L17.4204 10.3701L17.4252 10.3726C18.5547 11.0853 19.1197 11.4418 19.3051 11.917C19.4668 12.3315 19.4668 12.81 19.3051 13.2245C19.1195 13.7003 18.5531 14.0583 17.4204 14.773L4.2411 23.0885C3.21827 23.7338 2.70737 24.0555 2.28995 23.9918C1.92563 23.9362 1.59747 23.7037 1.38456 23.3496C1.14062 22.9438 1.14062 22.2587 1.14062 20.8873Z" fill="#112F55" stroke="#112F55" strokeWidth="2.28571" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
                <div className="kvis-progress-bar-container">
                  <div className="kvis-progress-bar">
                    <div 
                      className="kvis-progress-bar-fill" 
                      style={{ width: `calc(${progress.percentage}% - 4px)` }}
                    ></div>
                    <span className="kvis-progress-text">
                      <span className="kvis-progress-text-black">
                        Пройдено на {progress.percentage}%
                      </span>
                      <span 
                        className="kvis-progress-text-white"
                        style={{ '--progress': `${progress.percentage}%` }}
                      >
                        Пройдено на {progress.percentage}%
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {step === 6 && (
            <div className="kvis-image-section kvis-image-section-right">
              <div className="kvis-doctor-image-wrapper">
                <img src={doctorImage} alt="Доктор" className="kvis-doctor-image" />
                <div className="kvis-ready-bar-container">
                  <div className="kvis-ready-bar">
                    <span className="kvis-ready-text">Готово!</span>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.1151 17.4163H5.5026C4.99634 17.4163 4.58594 17.0059 4.58594 16.4997V10.9997C4.58594 10.4934 4.99634 10.083 5.5026 10.083H8.1151C8.19104 10.083 8.2526 10.1446 8.2526 10.2205V17.2788C8.2526 17.3548 8.19104 17.4163 8.1151 17.4163Z" stroke="white" strokeWidth="1.83333" strokeLinecap="round"/>
                      <path d="M8.25 10.0837L9.92938 7.56459C10.0298 7.41401 10.0833 7.23709 10.0833 7.05611V4.58366C10.0833 4.0774 10.4937 3.66699 11 3.66699H11.9167C12.9292 3.66699 13.75 4.4878 13.75 5.50033V10.0837" stroke="white" strokeWidth="1.83333" strokeLinecap="round"/>
                      <path d="M11.9167 10.083H16.285C17.3777 10.083 18.2278 11.0328 18.1071 12.1188L17.5979 16.7021C17.4947 17.6306 16.7099 18.333 15.7758 18.333H12.2964C12.0532 18.333 11.8201 18.2364 11.6482 18.0645L11.2685 17.6848C11.0966 17.5129 10.8634 17.4163 10.6203 17.4163H8.25" stroke="white" strokeWidth="1.83333" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Kvis;

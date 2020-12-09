import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;

/*
 iOS com Emulador: localhost
 iOS com físico: IP da máquina
 Android com Emulador: localhost (adb reverse) Ex: adb reverse tcp:8081 tcp:8081
 Android com Emulador: 10.0.2.2 (Android Studio usando o ip do emulador)
 Android com Emulador: 10.0.3.2 (Genymotion)
 Android com físico: IP da máquina
*/
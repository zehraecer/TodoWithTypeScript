# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




## Project Structure

- **components**: Contains all UI components used in the application.
- **redux**: Holds Redux Toolkit configurations and slice files for state management.
- **App.tsx**: Main component for the application.

## Redux and TypeScript Setup

In this project, state management is handled by Redux Toolkit. The `createSlice` function from Redux Toolkit is used for adding, deleting, and updating tasks, making these processes straightforward and efficient. TypeScript enhances type safety, reduces potential errors, and creates a more readable codebase.

## TypeScript Types Defined

- **CounterState**: Manages the core state of the application, including the task list and its metadata.
- **TodosType**: Defines the structure of each task item with properties like ID, title, and click status. These types support Redux state management by ensuring type-safe operations.

## Features

- **Add New Task**: Users can add a new task to the list.
- **Delete Task**: Users can remove an existing task from the list.
- **Update Task**: Users can update the title of an existing task.




##  Proje Yapısı

- **components**: Uygulamanın her bir bileşeni bu klasörde bulunur.
- **redux**: Redux Toolkit konfigürasyonları ve slice dosyaları burada yer alır.
- **App.tsx**: Uygulamanın ana bileşeni.

## Redux Yapısı ve TypeScript Kullanımı

Bu projede, Redux Toolkit ile durum yönetimi yapılmaktadır. Redux Toolkit'in `createSlice` fonksiyonu kullanılarak, görevlerin eklenmesi, silinmesi ve güncellenmesi işlemleri kolaylaştırılmıştır. TypeScript ile güçlü tip kontrolü sağlanarak hata oranı azaltılmış ve daha okunabilir bir kod yapısı oluşturulmuştur.


## TypeScript ile Tanımlanan Tipler

**CounterState** ve **TodosTyp**e tipleri, uygulamanın görev yapısını ve her görevin sahip olduğu özellikleri tanımlar. Bu tipler, Redux durum yönetiminde güvenli ve sürdürülebilir bir yapı sağlar.


## Özellikler

- **Yeni Görev Ekleme** : Kullanıcı, listeye yeni bir görev ekleyebilir.
- **Görev Silme** : Kullanıcı, var olan bir görevi listeden kaldırabilir.
- **Görev Güncelleme** : Kullanıcı, görev başlığını güncelleyebilir.

 


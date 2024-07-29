# Search Map App

## 🇧🇷 Descrição em Português

Search Map App é um aplicativo web que permite aos usuários buscar um endereço e exibir sua localização em um mapa do Google. O aplicativo é construído usando Angular e utiliza a API do Google Maps para fornecer funcionalidades de geocodificação e mapeamento.

### Funcionalidades

- Buscar um endereço e exibir sua localização em um mapa do Google
- Alternar entre os temas claro e escuro
- Exibir informações adicionais sobre o local buscado
- Exibir mensagens de erro quando o endereço não é encontrado

### Tecnologias Utilizadas

- Angular
- Google Maps API
- Angular Google Maps
- Angular Forms
- Angular HttpClient

### Decisões de Projeto

1. **Uso do Angular**: Escolhi o Angular como framework devido à sua robustez e à facilidade de integração com APIs externas.
2. **API do Google Maps**: A API do Google Maps foi escolhida para geocodificação e mapeamento devido à sua precisão e funcionalidades avançadas.
3. **Tema Escuro por Padrão**: O tema escuro foi definido como padrão para melhorar a experiência do usuário em ambientes com pouca luz.

### Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/renanfrontend/search-map-app.git
    cd search-map-app
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Crie um arquivo `src/environments/environment.ts` e adicione sua chave da API do Google Maps:
    ```typescript
    export const environment = {
      production: false,
      googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    };
    ```

4. Execute o aplicativo:
    ```bash
    ng serve
    ```

5. Abra o navegador e acesse:
    ```
    http://localhost:4200
    ```

### Organização do Projeto

- **app.component.ts**: Componente principal que gerencia a lógica de busca de endereço e alternância de tema.
- **app.component.html**: Template do componente principal que inclui a estrutura do cabeçalho, área de busca, mapa e rodapé.
- **app.component.scss**: Estilos do componente principal, incluindo variáveis de tema e estilos responsivos.
- **environment.ts**: Arquivo de configuração de ambiente para armazenar a chave da API do Google Maps.

---

## 🇺🇸 Description in English

Search Map App is a web application that allows users to search for an address and display its location on a Google Map. The application is built using Angular and leverages the Google Maps API to provide geocoding and mapping functionalities.

### Features

- Search for an address and display its location on a Google Map
- Toggle between dark and light themes
- Display additional information about the searched location
- Display error messages when the address is not found

### Technologies Used

- Angular
- Google Maps API
- Angular Google Maps
- Angular Forms
- Angular HttpClient

### Design Decisions

1. **Using Angular**: I chose Angular as the framework due to its robustness and ease of integration with external APIs.
2. **Google Maps API**: The Google Maps API was chosen for geocoding and mapping due to its accuracy and advanced features.
3. **Dark Theme by Default**: The dark theme was set as the default to enhance the user experience in low-light environments.

### How to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/renanfrontend/search-map-app.git
    cd search-map-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `src/environments/environment.ts` file and add your Google Maps API key:
    ```typescript
    export const environment = {
      production: false,
      googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    };
    ```

4. Run the application:
    ```bash
    ng serve
    ```

5. Open your browser and access:
    ```
    http://localhost:4200
    ```

### Project Structure

- **app.component.ts**: Main component that handles the logic for address search and theme toggling.
- **app.component.html**: Template of the main component that includes the structure of the header, search area, map, and footer.
- **app.component.scss**: Styles of the main component, including theme variables and responsive styles.
- **environment.ts**: Environment configuration file to store the Google Maps API key.

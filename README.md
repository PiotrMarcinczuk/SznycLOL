# Aplikacja Next.js z Riot API

To prosta aplikacja Next.js, która łączy się z backendem i używa Riot API do pobierania danych. Strona dynamicznie generuje wykresy bąbelkowe, które przedstawiają poziomy maestrii twoich bohaterów, oferując jasny i angażujący sposób na wyświetlanie twoich osiągnięć w grze. Pierwowzorem tego projektu jest strona dostępna pod adresem: https://masterychart.com/

## Wykorzystane technologie

- **Next.js** 
- **React** 
- **Riot API**
- **D3.js** 
- **Node.js** 

## Instalacja

1. Sklonuj repozytorium:

    ```bash
    git clone https://github.com/PiotrMarcinczuk/SznycLOL.git
    cd SznycLOL
    ```

2. Zainstaluj zależności:

    ```bash
    npm install
    npm install dotenv

    cd src
    npm install next
    ```

3. Stwórz plik `.env` w katalogu głównym z następującą zawartością:

    ```env
    URL="https://twoj-backend-url.com"
    ALLOWED_ORIGINS="https://twoj-frontend-url.com"
    RIOT_API_KEY="twoj-riot-api-key"
    ```

4. Uruchom serwer deweloperski:

    ```bash
    SznycLOL/src
    npm run dev

    SznycLOL/backend
    node app.js
    ```

    Aplikacja będzie dostępna pod adresem [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Użycie

- Zmienna `URL` zawiera adres backendu używanego przez frontend.
- `RIOT_API_KEY` jest używany do łączenia się z Riot API, aby pobierać dane.
- `ALLOWED_ORIGINS` to URL frontendowy, który ma dostęp do backendu.

  ![image](https://github.com/user-attachments/assets/f26f41cd-af5c-4ef2-b9bc-65915a26264c)



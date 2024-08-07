
### Deploy a new environment

1. Set configuration
Enable Speech-to-Text and Text-to-Speech (Browser dependend), as well as switching to GPT-4o .
NOTE: currently GPT-4o and Vision are not supported in `switzerlandnorth` region. Choose e.g. `useast`

```bash
azd auth login
azd env new ethel-chat

azd env set USE_SPEECH_INPUT_BROWSER true
azd env set USE_SPEECH_OUTPUT_AZURE true
# GPT-4
azd env set USE_FEATURE_INT_VECTORIZATION false 
azd env set USE_GPT4V true
azd env set AZURE_OPENAI_CHATGPT_DEPLOYMENT chat4o
azd env set AZURE_OPENAI_CHATGPT_MODEL gpt-4o
azd env set AZURE_OPENAI_CHATGPT_DEPLOYMENT_CAPACITY 10
azd env set AZURE_OPENAI_CHATGPT_DEPLOYMENT_VERSION 2024-05-13


azd up
```
#### Login and Document level access
```bash
azd env set AZURE_ENABLE_UNAUTHENTICATED_ACCESS true
```

#### Updating the backend/frontend apps
```
azd deploy
```

#### Run locally
```bash
cd app
./start.sh
# open (http://127.0.0.1:50505)
```



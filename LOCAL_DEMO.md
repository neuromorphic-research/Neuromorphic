# Local M2 Demo Integration

Phase 1 connects the Vite website running on this computer to the Flask demo in
`../M2demowithgui/demov2.2`. The website uses a Vite dev proxy at `/local-demo`,
so the Python service can stay bound to `127.0.0.1:7860`.

## One-Time Setup

Install command line tools and runtimes:

```sh
xcode-select --install
brew install node python@3.11
```

Install website dependencies:

```sh
cd /Users/tezer/neuromorphic_ws/Neuromorphic
npm install
```

Install demo dependencies:

```sh
cd /Users/tezer/neuromorphic_ws
python3.11 -m venv .venvs/m2demo
source .venvs/m2demo/bin/activate
pip install --upgrade pip
pip install flask numpy pillow opencv-python requests mlx mlx-vlm torch timm
```

## Run Locally

Terminal 1, start the Python demo:

```sh
cd /Users/tezer/neuromorphic_ws/M2demowithgui/demov2.2
source /Users/tezer/neuromorphic_ws/.venvs/m2demo/bin/activate
python demo_gui.py --host 127.0.0.1 --port 7860 --no-open --defer-start
```

To inspect cameras first:

```sh
python demo_gui.py --list-cameras
```

If macOS reports that OpenCV is not authorized to capture video, open System
Settings -> Privacy & Security -> Camera and allow the terminal app used to run
the command. Then restart `demo_gui.py`.

Terminal 2, start the website:

```sh
cd /Users/tezer/neuromorphic_ws/Neuromorphic
npm run dev
```

Open the Vite URL for the website. Use the Demo nav item to switch to `/demo`
in the same tab; the embedded demo will ask for camera and prompt before
starting the model.

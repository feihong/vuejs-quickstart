import os
import subprocess
import signal
from invoke import task


WEBPACK_WATCH_COMMAND = 'webpack --progress --colors --debug --watch'


@task
def serve(ctx):
    """
    Run the web server and webpack watcher at the same time.

    """
    webpack_proc = subprocess.Popen(WEBPACK_WATCH_COMMAND, shell=True)
    run_server()
    # Server is stopped, so stop webpack as well.
    webpack_proc.send_signal(signal.SIGINT)
    print('Waiting for webpack to shut down...')
    webprack_proc.wait()
    print('Done!')


@task
def build(ctx):
    """
    Build the source files.

    """
    ctx.run('webpack --progress --colors')


@task
def watch(ctx):
    """
    Launch the webpack watcher.

    """
    ctx.run(WEBPACK_WATCH_COMMAND)


def run_server():
    import http.server
    import socketserver

    Handler = http.server.SimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(('localhost', 8000), Handler)
    print('Serving on localhost:8000')
    os.chdir('static')
    httpd.serve_forever()

all: cleanbuild

cleanbuild:
	latexmk -r latexmake.rc -pdf main.tex && latexmk -c

pdf:
	latexmk -r latexmake.rc -pdf main.tex

clean:
	latexmk -c
	rm -f GUC-logo-ss-eps-converted-to.pdf
	rm -f main.bbl

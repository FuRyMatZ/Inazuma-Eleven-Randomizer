# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'inazuma.ui'
#
# Created by: PyQt5 UI code generator 5.15.4
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(650, 800)
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.verticalLayout = QtWidgets.QVBoxLayout(self.centralwidget)
        self.verticalLayout.setObjectName("verticalLayout")
        self.label_16 = QtWidgets.QLabel(self.centralwidget)
        self.label_16.setAlignment(QtCore.Qt.AlignCenter)
        self.label_16.setObjectName("label_16")
        self.verticalLayout.addWidget(self.label_16)
        spacerItem = QtWidgets.QSpacerItem(20, 40, QtWidgets.QSizePolicy.Minimum, QtWidgets.QSizePolicy.Expanding)
        self.verticalLayout.addItem(spacerItem)
        self.comboBox = QtWidgets.QComboBox(self.centralwidget)
        self.comboBox.setEditable(False)
        self.comboBox.setCurrentText("")
        self.comboBox.setPlaceholderText("")
        self.comboBox.setObjectName("comboBox")
        self.verticalLayout.addWidget(self.comboBox)
        self.pushButton = QtWidgets.QPushButton(self.centralwidget)
        self.pushButton.setObjectName("pushButton")
        self.verticalLayout.addWidget(self.pushButton)
        spacerItem1 = QtWidgets.QSpacerItem(20, 40, QtWidgets.QSizePolicy.Minimum, QtWidgets.QSizePolicy.Expanding)
        self.verticalLayout.addItem(spacerItem1)
        self.horizontalLayout = QtWidgets.QHBoxLayout()
        self.horizontalLayout.setObjectName("horizontalLayout")
        spacerItem2 = QtWidgets.QSpacerItem(40, 20, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Minimum)
        self.horizontalLayout.addItem(spacerItem2)
        self.verticalLayout_2 = QtWidgets.QVBoxLayout()
        self.verticalLayout_2.setObjectName("verticalLayout_2")
        self.label_11 = QtWidgets.QLabel(self.centralwidget)
        self.label_11.setAlignment(QtCore.Qt.AlignCenter)
        self.label_11.setObjectName("label_11")
        self.verticalLayout_2.addWidget(self.label_11)
        self.label_3 = QtWidgets.QLabel(self.centralwidget)
        self.label_3.setMinimumSize(QtCore.QSize(200, 200))
        self.label_3.setText("")
        self.label_3.setPixmap(QtGui.QPixmap("../Inazuma Eleven 3/(DT) (FW) (♂) Desuta.png"))
        self.label_3.setScaledContents(True)
        self.label_3.setAlignment(QtCore.Qt.AlignCenter)
        self.label_3.setObjectName("label_3")
        self.verticalLayout_2.addWidget(self.label_3)
        self.label_8 = QtWidgets.QLabel(self.centralwidget)
        self.label_8.setAlignment(QtCore.Qt.AlignCenter)
        self.label_8.setObjectName("label_8")
        self.verticalLayout_2.addWidget(self.label_8)
        self.horizontalLayout.addLayout(self.verticalLayout_2)
        self.verticalLayout_3 = QtWidgets.QVBoxLayout()
        self.verticalLayout_3.setObjectName("verticalLayout_3")
        self.label_12 = QtWidgets.QLabel(self.centralwidget)
        self.label_12.setAlignment(QtCore.Qt.AlignCenter)
        self.label_12.setObjectName("label_12")
        self.verticalLayout_3.addWidget(self.label_12)
        self.label_2 = QtWidgets.QLabel(self.centralwidget)
        self.label_2.setMinimumSize(QtCore.QSize(200, 200))
        self.label_2.setText("")
        self.label_2.setPixmap(QtGui.QPixmap("../Inazuma Eleven 3/(IJ) (FW) (♂) Kiyama Hiroto.png"))
        self.label_2.setScaledContents(True)
        self.label_2.setAlignment(QtCore.Qt.AlignCenter)
        self.label_2.setWordWrap(False)
        self.label_2.setObjectName("label_2")
        self.verticalLayout_3.addWidget(self.label_2)
        self.label_9 = QtWidgets.QLabel(self.centralwidget)
        self.label_9.setAlignment(QtCore.Qt.AlignCenter)
        self.label_9.setObjectName("label_9")
        self.verticalLayout_3.addWidget(self.label_9)
        self.horizontalLayout.addLayout(self.verticalLayout_3)
        self.verticalLayout_4 = QtWidgets.QVBoxLayout()
        self.verticalLayout_4.setObjectName("verticalLayout_4")
        self.label_13 = QtWidgets.QLabel(self.centralwidget)
        self.label_13.setAlignment(QtCore.Qt.AlignCenter)
        self.label_13.setObjectName("label_13")
        self.verticalLayout_4.addWidget(self.label_13)
        self.label = QtWidgets.QLabel(self.centralwidget)
        self.label.setMinimumSize(QtCore.QSize(200, 200))
        self.label.setText("")
        self.label.setPixmap(QtGui.QPixmap("../Inazuma Eleven 3/(MC) (FW) (♂) Sein.png"))
        self.label.setScaledContents(True)
        self.label.setAlignment(QtCore.Qt.AlignCenter)
        self.label.setObjectName("label")
        self.verticalLayout_4.addWidget(self.label)
        self.label_10 = QtWidgets.QLabel(self.centralwidget)
        self.label_10.setAlignment(QtCore.Qt.AlignCenter)
        self.label_10.setObjectName("label_10")
        self.verticalLayout_4.addWidget(self.label_10)
        self.horizontalLayout.addLayout(self.verticalLayout_4)
        spacerItem3 = QtWidgets.QSpacerItem(40, 20, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Minimum)
        self.horizontalLayout.addItem(spacerItem3)
        self.verticalLayout.addLayout(self.horizontalLayout)
        self.horizontalLayout_2 = QtWidgets.QHBoxLayout()
        self.horizontalLayout_2.setObjectName("horizontalLayout_2")
        spacerItem4 = QtWidgets.QSpacerItem(40, 20, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Minimum)
        self.horizontalLayout_2.addItem(spacerItem4)
        self.verticalLayout_5 = QtWidgets.QVBoxLayout()
        self.verticalLayout_5.setObjectName("verticalLayout_5")
        self.label_14 = QtWidgets.QLabel(self.centralwidget)
        self.label_14.setAlignment(QtCore.Qt.AlignCenter)
        self.label_14.setObjectName("label_14")
        self.verticalLayout_5.addWidget(self.label_14)
        self.label_5 = QtWidgets.QLabel(self.centralwidget)
        self.label_5.setMinimumSize(QtCore.QSize(200, 200))
        self.label_5.setText("")
        self.label_5.setPixmap(QtGui.QPixmap("../Inazuma Eleven 3/(LG) (GK) (♂) Rococo Urupa.png"))
        self.label_5.setScaledContents(True)
        self.label_5.setAlignment(QtCore.Qt.AlignCenter)
        self.label_5.setObjectName("label_5")
        self.verticalLayout_5.addWidget(self.label_5)
        self.label_6 = QtWidgets.QLabel(self.centralwidget)
        self.label_6.setAlignment(QtCore.Qt.AlignCenter)
        self.label_6.setObjectName("label_6")
        self.verticalLayout_5.addWidget(self.label_6)
        self.horizontalLayout_2.addLayout(self.verticalLayout_5)
        self.verticalLayout_6 = QtWidgets.QVBoxLayout()
        self.verticalLayout_6.setObjectName("verticalLayout_6")
        self.label_15 = QtWidgets.QLabel(self.centralwidget)
        self.label_15.setAlignment(QtCore.Qt.AlignCenter)
        self.label_15.setObjectName("label_15")
        self.verticalLayout_6.addWidget(self.label_15)
        self.label_4 = QtWidgets.QLabel(self.centralwidget)
        self.label_4.setMinimumSize(QtCore.QSize(200, 200))
        self.label_4.setText("")
        self.label_4.setPixmap(QtGui.QPixmap("../Inazuma Eleven 3/(TO) (FW) (♂) Bash Lancer.png"))
        self.label_4.setScaledContents(True)
        self.label_4.setAlignment(QtCore.Qt.AlignCenter)
        self.label_4.setObjectName("label_4")
        self.verticalLayout_6.addWidget(self.label_4)
        self.label_7 = QtWidgets.QLabel(self.centralwidget)
        self.label_7.setAlignment(QtCore.Qt.AlignCenter)
        self.label_7.setObjectName("label_7")
        self.verticalLayout_6.addWidget(self.label_7)
        self.horizontalLayout_2.addLayout(self.verticalLayout_6)
        spacerItem5 = QtWidgets.QSpacerItem(40, 20, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Minimum)
        self.horizontalLayout_2.addItem(spacerItem5)
        self.verticalLayout.addLayout(self.horizontalLayout_2)
        spacerItem6 = QtWidgets.QSpacerItem(20, 40, QtWidgets.QSizePolicy.Minimum, QtWidgets.QSizePolicy.Expanding)
        self.verticalLayout.addItem(spacerItem6)
        
        self.horizontalLayout_3 = QtWidgets.QHBoxLayout()
        self.horizontalLayout_3.setObjectName("horizontalLayout_3")
        spacerItem7 = QtWidgets.QSpacerItem(40, 20, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Minimum)
        self.horizontalLayout_3.addItem(spacerItem7)
        self.gridLayout = QtWidgets.QGridLayout()
        self.gridLayout.setObjectName("gridLayout")
        self.SelectedCharacter2 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter2.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter2.setText("")
        self.SelectedCharacter2.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter2.setObjectName("SelectedCharacter2")
        self.gridLayout.addWidget(self.SelectedCharacter2, 0, 3, 1, 1)
        self.SelectedCharacter4 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter4.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter4.setText("")
        self.SelectedCharacter4.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter4.setObjectName("SelectedCharacter4")
        self.gridLayout.addWidget(self.SelectedCharacter4, 0, 5, 1, 1)
        self.SelectedCharacter9 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter9.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter9.setText("")
        self.SelectedCharacter9.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter9.setObjectName("SelectedCharacter9")
        self.gridLayout.addWidget(self.SelectedCharacter9, 1, 2, 1, 1)
        self.SelectedCharacter11 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter11.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter11.setText("")
        self.SelectedCharacter11.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter11.setObjectName("SelectedCharacter11")
        self.gridLayout.addWidget(self.SelectedCharacter11, 1, 4, 1, 1)
        self.SelectedCharacter13 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter13.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter13.setText("")
        self.SelectedCharacter13.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter13.setObjectName("SelectedCharacter13")
        self.gridLayout.addWidget(self.SelectedCharacter13, 1, 6, 1, 1)
        self.SelectedCharacter7 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter7.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter7.setText("")
        self.SelectedCharacter7.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter7.setObjectName("SelectedCharacter7")
        self.gridLayout.addWidget(self.SelectedCharacter7, 0, 8, 1, 1)
        self.SelectedCharacter16 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter16.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter16.setText("")
        self.SelectedCharacter16.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter16.setObjectName("SelectedCharacter16")
        self.gridLayout.addWidget(self.SelectedCharacter16, 1, 9, 1, 1)
        self.SelectedCharacter6 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter6.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter6.setText("")
        self.SelectedCharacter6.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter6.setObjectName("SelectedCharacter6")
        self.gridLayout.addWidget(self.SelectedCharacter6, 0, 7, 1, 1)
        self.SelectedCharacter14 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter14.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter14.setText("")
        self.SelectedCharacter14.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter14.setObjectName("SelectedCharacter14")
        self.gridLayout.addWidget(self.SelectedCharacter14, 1, 7, 1, 1)
        self.SelectedCharacter3 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter3.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter3.setText("")
        self.SelectedCharacter3.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter3.setObjectName("SelectedCharacter3")
        self.gridLayout.addWidget(self.SelectedCharacter3, 0, 4, 1, 1)
        self.SelectedCharacter8 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter8.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter8.setText("")
        self.SelectedCharacter8.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter8.setObjectName("SelectedCharacter8")
        self.gridLayout.addWidget(self.SelectedCharacter8, 0, 9, 1, 1)
        self.SelectedCharacter12 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter12.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter12.setText("")
        self.SelectedCharacter12.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter12.setObjectName("SelectedCharacter12")
        self.gridLayout.addWidget(self.SelectedCharacter12, 1, 5, 1, 1)
        self.SelectedCharacter15 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter15.setMinimumSize(QtCore.QSize(70, 70))
        self.SelectedCharacter15.setText("")
        self.SelectedCharacter15.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter15.setObjectName("SelectedCharacter15")
        self.gridLayout.addWidget(self.SelectedCharacter15, 1, 8, 1, 1)
        self.SelectedCharacter5 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter5.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter5.setText("")
        self.SelectedCharacter5.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter5.setObjectName("SelectedCharacter5")
        self.gridLayout.addWidget(self.SelectedCharacter5, 0, 6, 1, 1)
        self.SelectedCharacter10 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter10.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter10.setText("")
        self.SelectedCharacter10.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter10.setObjectName("SelectedCharacter10")
        self.gridLayout.addWidget(self.SelectedCharacter10, 1, 3, 1, 1)
        self.SelectedCharacter1 = QtWidgets.QLabel(self.centralwidget)
        self.SelectedCharacter1.setMinimumSize(QtCore.QSize(50, 50))
        self.SelectedCharacter1.setText("")
        self.SelectedCharacter1.setPixmap(QtGui.QPixmap("../character-placeholder.png"))
        self.SelectedCharacter1.setScaledContents(False)
        self.SelectedCharacter1.setObjectName("SelectedCharacter1")
        self.gridLayout.addWidget(self.SelectedCharacter1, 0, 2, 1, 1)
        self.horizontalLayout_3.addLayout(self.gridLayout)
        spacerItem8 = QtWidgets.QSpacerItem(40, 20, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Minimum)
        self.horizontalLayout_3.addItem(spacerItem8)
        self.verticalLayout.addLayout(self.horizontalLayout_3)
        spacerItem9 = QtWidgets.QSpacerItem(20, 40, QtWidgets.QSizePolicy.Minimum, QtWidgets.QSizePolicy.Expanding)
        self.verticalLayout.addItem(spacerItem9)
        MainWindow.setCentralWidget(self.centralwidget)

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "MainWindow"))
        self.label_16.setText(_translate("MainWindow", "<html><head/><body><p align=\"center\"><span style=\" font-size:14pt; font-weight:600;\">Random Draft Inazuma Eleven</span></p></body></html>"))
        self.pushButton.setText(_translate("MainWindow", "Start Random pick"))
        self.label_11.setText(_translate("MainWindow", "Dark Team"))
        self.label_8.setText(_translate("MainWindow", "Destra - M"))
        self.label_12.setText(_translate("MainWindow", "Inzuma Japon"))
        self.label_9.setText(_translate("MainWindow", "Xavier - M"))
        self.label_13.setText(_translate("MainWindow", "Mesagers du Ciel"))
        self.label_10.setText(_translate("MainWindow", "Saël - M"))
        self.label_14.setText(_translate("MainWindow", "Little Gigantes"))
        self.label_6.setText(_translate("MainWindow", "Hélio - M"))
        self.label_15.setText(_translate("MainWindow", "Ogres"))
        self.label_7.setText(_translate("MainWindow", "Lancer - M"))


if __name__ == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    MainWindow = QtWidgets.QMainWindow()
    ui = Ui_MainWindow()
    ui.setupUi(MainWindow)
    MainWindow.show()
    sys.exit(app.exec_())

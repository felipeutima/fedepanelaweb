from django import forms
from .models import Multimedia


class MultimediaForm(forms.ModelForm):
    image=forms.FileField(widget=forms.ClearableFileInput(attrs={'multiple': True}))

    class Meta:
        model=Multimedia
        fields = "__all__"